const nodeMailer = require('nodemailer');

async function sendMail() {
    try {
        let transportmail = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'shijo7488@gmail.com',
                pass: 'ahpgntqrjykpptbu',
            }
        });

        let mailContent = {
            from: 'shijo7488@gmail.com',
            to: 'shijo9345@gmail.com',
            subject: 'Txt Mail',
            text: 'Hello World!',
        };

        let info = await transportmail.sendMail(mailContent);
        console.log('Message sent: %s', info.messageId);
    } catch (err) {
        console.log(err);
    }
}

sendMail();
