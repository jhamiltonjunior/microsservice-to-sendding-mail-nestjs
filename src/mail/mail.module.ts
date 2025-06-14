import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import {MailConsumer} from "./mail.consumer";

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: process.env.MAIL_HOST || 'smtp.example.com',
                port: Number(process.env.MAIL_PORT) || 587,
                secure: false,
                auth: {
                    user: process.env.MAIL_USER || '',
                    pass: process.env.MAIL_PASSWORD || '',
                },
            },
        }),
    ],
    controllers: [MailConsumer],
    providers: [MailService],
    exports: [MailService],
})
export class MailModule {}
