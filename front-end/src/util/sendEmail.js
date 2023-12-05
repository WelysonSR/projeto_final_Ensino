'use server'

const nodemailer = require('nodemailer');

export async function sendEmail(email) {
  // Configura o transporte do e-mail (altere com suas próprias credenciais)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'devgameunifacs@gmail.com',
      pass: 'xygi llqy nriw crnd',
    },
  });

  // Configura o conteúdo do e-mail
  const mailOptions = {
    from: 'devgameunifacs@gmail.com',
    to: email,
    subject: 'Recuperar Senha',
    text: 'Conteúdo do e-mail',
  };

  // Tenta enviar o e-mail
  try {
    const info = await transporter.sendMail(mailOptions);
    return info.messageId
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
  }
}
