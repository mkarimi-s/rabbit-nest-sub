import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const RMQ_URL = process.env.RABBIT_URL;
  const QUEUE_NAME = process.env.QUEUE_NAME;
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [RMQ_URL],
      queue: QUEUE_NAME,
      noAck: false,
      prefetchCount: 1,
    },
  });
  await app.startAllMicroservices();
  await app.listen(process.env.APP_PORT || 3000);
}
bootstrap();
