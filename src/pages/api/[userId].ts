import { PrismaClient } from '@prisma/client';
import twilio from 'twilio';
import OpenAi from 'openai';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
const openai = new OpenAi({
    apiKey: process.env.OPEN_AI_KEY
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { Body, From, To } = req.body;

        const twilioNumber = To.replace('whatsapp:', '');

        try {
            const user = await prisma.user.findUnique({
                where: { twilioNumber: twilioNumber },
                include: { domains: true }
            });

            if (!user || !user.domains[0]) {
                return res.status(404).json({ message: "Usuario o dominio no encontrado." });
            }

            const twilioClient = twilio(user.accountSid!, user.authToken!);

            const helpDeskQuestions = await prisma.helpDesk.findMany({
                where: { domainId: user.domains[0].id }
            });

            const systemMessage = `Eres un asistente virtual que responde a preguntas sobre servicios tecnológicos y atención al cliente. Aquí están algunas preguntas frecuentes y sus respuestas:

${helpDeskQuestions.map(q => `Q: ${q.question}\nA: ${q.answer}`).join('\n\n')}

Por favor, utiliza esta información para responder a las preguntas del usuario. Si la pregunta del usuario no está directamente relacionada con las preguntas frecuentes proporcionadas, responde de la mejor manera posible basándote en el contexto general.`;

            const chatResponse = await openai.chat.completions.create({
                model: "gpt-4",
                messages: [{
                    role: "system",
                    content: systemMessage
                }, {
                    role: "user",
                    content: Body
                }],
                max_tokens: 150
            });

            const botResponse = chatResponse.choices[0].message.content?.trim();

            await twilioClient.messages.create({
                body: botResponse,
                from: To,
                to: From
            });

            res.status(200).json({ message: "Respuesta enviada correctamente." });
        } catch (error : any) {
            console.error('Error procesando el mensaje:', error);
            res.status(500).json({ message: 'Error al procesar el mensaje', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
