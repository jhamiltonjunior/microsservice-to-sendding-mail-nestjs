import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { NotificationDto } from 'src/notification/dto/notification.dto';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendMail(notification: NotificationDto) {
        const { email, message } = notification;

        await this.mailerService.sendMail({
            from: process.env.MAIL_FROM || '',
            to: `${email}`,
            subject: 'New Notification',
            text: message,
        });

    console.log(`Mail sent to ${email}`);
  }
}
