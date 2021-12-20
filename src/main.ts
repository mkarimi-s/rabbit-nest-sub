import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const RMQ_URL = process.env.RABBIT_URL;
  const QUEUE_NAME = process.env.QUEUE_NAME;
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
