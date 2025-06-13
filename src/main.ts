import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Transport} from "@nestjs/microservices";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const queues = ['schedule_queue', 'mail_queue'];

    for (const queue of queues) {
        app.connectMicroservice({
            transport: Transport.RMQ,
            options: {
                urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
                queue,
                queueOptions: {
                    durable: true,
                },
            },
        });
    }

    await app.startAllMicroservices();
}
bootstrap().then(() => console.log(`Server is running`));
