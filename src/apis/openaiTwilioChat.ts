import twilio from 'twilio';
import OpenAi from 'openai';

const openai = new OpenAi({
    apiKey: process.env.OPEN_AI_KEY,
});

export default async function handler(req: { method: string; body: { Body?: any; From?: any; whatsappNumber?: any; accountSid?: any; authToken?: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
    if (req.method === 'POST') {
        const { whatsappNumber, accountSid, authToken } = req.body;

        const incomingMessage = req.body.Body; // El mensaje del cliente
        const from = req.body.From;

        try {

            const twilioClient = twilio(accountSid, authToken);

            const chatCompletion = await openai.chat.completions.create({
                model: 'gpt-4',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: incomingMessage },
                ],
                max_tokens: 150,
            });

            const botResponse = chatCompletion.choices[0].message.content?.trim();

            await twilioClient.messages.create({
                body: botResponse,
                from: `whatsapp:${whatsappNumber}`,
                to: from,
            });

            res.status(200).json({ message: 'Bot configurado y mensaje enviado con éxito' });
        } catch (error) {
            console.error('Error procesando el mensaje:', error);
            res.status(500).json({ message: 'Error al procesar el mensaje' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
