const emailService = require('../../service/emailService');

const sendContactEmail = async (req, res) => {
  try {
    const { to, subject, body } = req.body;

    await emailService.sendEmail(to, subject, body);

    res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ message: 'Erro ao enviar email!' });
  }
}

module.exports = { sendContactEmail };