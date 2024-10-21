const nodemailer = require('nodemailer');

//Criação do tranporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT === '465', // true para 465, false para outras portas
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Função para enviar e-mail
const sendEmail = async (to, subject, body) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER, 
      to: process.env.SMTP_TO, 
      subject: subject,
      text: body,
    });
    
    return info; 
  } catch (error) {
    throw new Error('Erro ao enviar email: ' + error.message);
  }
};

module.exports = { sendEmail };
