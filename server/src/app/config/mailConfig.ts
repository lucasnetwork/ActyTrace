import nodeMailer, { Transporter } from 'nodemailer';

class MailConfig {
  private client: Transporter;

  constructor() {
    this.client = nodeMailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  async execute(to: string, from: string, subject: string, text: string) {
    return this.client.sendMail({
      from,
      to,
      subject,
      text,
    });
  }
}

export default MailConfig;
