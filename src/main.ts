import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const RMQ_URL =
    'amqps://empnayyn:1oQzA2-FRc1LFNDvVi6leb_Zmrr7lDnX@poodle.rmq2.cloudamqp.com/empnayyn';
  const QUEUE_NAME = 'notification-queue';
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [RMQ_URL],
      queue: QUEUE_NAME,
      noAck: false,
      prefetchCount: 1,
    },
  });
  await app.listen();
}
bootstrap();
