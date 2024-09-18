
import { client } from '@/lib/prisma'
import twilio from 'twilio';

export default async function handler(req: { method: string; body: { userId: any; whatsappNumber: any; accountSid: any; authToken: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; data?: { id: string; fullname: string; clerkId: string; type: string; createdAt: Date; updatedAt: Date; stripeId: string | null; }; error?: unknown; }): void; new(): any; }; }; }) {
    if (req.method === 'POST') {
        const { userId, whatsappNumber, accountSid, authToken } = req.body;

        try {
            const existingUser = await client.user.findFirst({
                where: { twilioNumber: whatsappNumber },
            });

            if (existingUser) {
                return res.status(400).json({ message: 'El número de WhatsApp ya está en uso por otro usuario.' });
            }

            const webhookUrl = `http://localhost:3001/api/webhook/${userId}`;

            const updatedUser = await client.user.update({
                where: { id: userId },
                data: {
                    twilioNumber: whatsappNumber,
                    webhookUrl: webhookUrl,
                },
            });

            const twilioClient = twilio(accountSid, authToken);

            await twilioClient.incomingPhoneNumbers.create({
                phoneNumber: whatsappNumber,
                smsUrl: webhookUrl,
            });

            res.status(200).json({ message: 'Número de Twilio registrado y webhook configurado', data: updatedUser });
        } catch (error) {
            console.error('Error configurando el webhook:', error);
            res.status(500).json({ message: 'Error al configurar el webhook', error });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
