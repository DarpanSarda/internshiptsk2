const nodemailer = require('nodemailer')

function sendEmail(email, subject, message) {
    const SMTP_HOST="smtp-mail.outlook.com";
    const SMTP_PORT=587
    const SMTP_MAIL="lmsportal8773@outlook.com"
    const SMTP_PASSWORD="Darpan@123"
    try {
        console.log("nodemailer" ,email)
        const transporter = nodemailer.createTransport({
        service: 'outlook',
        host: SMTP_HOST,
        port: SMTP_PORT,
        auth: {
            user: SMTP_MAIL,
            pass: SMTP_PASSWORD,
        },
    })

    const mailOptions = {
        from: SMTP_MAIL,
        to: email,
        subject,
        text: message,
    }

    transporter.sendMail(mailOptions)        
    } catch (error) {
        console.log(error);
    }

}

module.exports = { sendEmail }