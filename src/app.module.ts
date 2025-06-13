import 'dotenv/config';
// dotenConfig();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import {rabbitMQModule} from "./rabbitMQ/rabbitMQ.module";
import { MailModule } from './mail/mail.module';

@Module({
    imports: [ConfigModule.forRoot(), rabbitMQModule, MailModule],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {}
