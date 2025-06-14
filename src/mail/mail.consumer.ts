import { Process } from '@nestjs/bull';
import { Job } from 'bull';
import {Controller} from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import {NotificationDto} from "../notification/dto/notification.dto";
import {EventPattern} from "@nestjs/microservices";

@Controller()
export class MailConsumer {
    constructor(private readonly mailService: MailService) {}

    @EventPattern('send_email')
    @Process()
    async processNotification(job: Job<NotificationDto>) {
        console.log('Processing notification job...');

        const notification = job.data;

        console.log(notification);

        if (!notification) {
            console.error('Notification is undefined');
            return;
        }
        await this.mailService.sendMail(notification);
        return notification;
    }
}