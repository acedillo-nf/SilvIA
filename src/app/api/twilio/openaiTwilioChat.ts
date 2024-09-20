import { PrismaClient } from '@prisma/client';
import twilio from 'twilio';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { userId, whatsappNumber, accountSid, authToken } = req.body;

        try {
            const twilioClient = twilio(accountSid, authToken);

            const webhookUrl = `https://${req.headers.host}/app/api/twilio/${userId}`;

            const updatedUser = await prisma.user.update({
                where: { id: userId },
                data: {
                    twilioNumber: whatsappNumber,
                    accountSid,
                    webhookUrl,
                },
            });

            await twilioClient.incomingPhoneNumbers.create({
                phoneNumber: whatsappNumber,
                smsUrl: webhookUrl,
            });

            res.status(200).json({ message: 'Datos de Twilio actualizados correctamente', data: updatedUser });
        } catch (error: any) {
            console.error('Error actualizando los datos de Twilio:', error);
            res.status(500).json({ error: 'Error al actualizar los datos de Twilio', details: error.message });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
