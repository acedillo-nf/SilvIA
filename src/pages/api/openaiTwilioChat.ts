import { PrismaClient } from '@prisma/client';
import twilio from 'twilio';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { userId, whatsappNumber, accountSid, authToken } = req.body;

        try {
            const twilioClient = twilio(accountSid, authToken);

            const webhookUrl = `http://maria-sales.vercel.app/api/${userId}`;

            const updatedUser = await prisma.user.update({
                where: { id: userId },
                data: {
                    twilioNumber: whatsappNumber,
                    accountSid,
                    webhookUrl,
                    authToken
                },
            });
            /**await twilioClient.incomingPhoneNumbers.list().then(function (data) {
                console.log(data);
            }, function (err) {
                console.log(err);
            });**/

            /**await twilioClient.incomingPhoneNumbers(accountSid)
                .update({
                    smsUrl: webhookUrl,
                })
                .then(phoneNumber => console.log(phoneNumber.sid))
                .catch(error => console.error('Error al configurar el webhook en Twilio:', error));**/

            await twilioClient.messaging.v1.services('MG838a13825bb74c70e6245e010f049959')
                .update({
                    inboundRequestUrl: `http://maria-sales.vercel.app/api/${userId}`,
                    inboundMethod: 'POST',
                    useInboundWebhookOnNumber: true
                })
                .then(service => console.log(service.inboundRequestUrl))
                .catch(error => console.error(error));

            res.status(200).json({ message: 'Datos de Twilio actualizados correctamente', data: updatedUser });
        } catch (error: any) {
            console.error('Error actualizando los datos de Twilio:', error);
            res.status(500).json({ error: 'Error al actualizar los datos de Twilio', details: error.message });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
