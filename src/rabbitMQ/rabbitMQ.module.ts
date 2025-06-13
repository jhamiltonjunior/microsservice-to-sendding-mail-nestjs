import { Global, Module } from '@nestjs/common'
import { rabbitMQController } from './rabbitMQ.controller';

@Global()
@Module({
  controllers: [rabbitMQController],
  providers: [],
  exports: [],
})

export class rabbitMQModule {}