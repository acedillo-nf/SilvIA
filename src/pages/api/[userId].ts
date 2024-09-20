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
                where: { twilioNumber: twilioNumber }  // Uso de twilioNumber limpio para la consulta
            });

            if (!user) {
                return res.status(404).json({ message: "Usuario no encontrado." });
            }

            const twilioClient = twilio(user.accountSid!, user.authToken!);

            const chatResponse = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "system",
                    content: "Eres un asistente virtual que responde a preguntas sobre servicios tecnológicos y atención al cliente."
                }, {
                    role: "user",
                    content: Body
                }, {
                    role: "assistant",
                    content: `
                    Los servicios que ofrecemos incluyen:
                    - RPA (Automatización Robótica de Procesos)
                    - Inteligencia Artificial (IA)
                    - Blockchain
                    Para consultas, puedes llamar al número de atención al cliente: 4773036854.
                    ¿En qué más puedo asistirte?`
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
