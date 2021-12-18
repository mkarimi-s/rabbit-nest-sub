import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Payload,
  Ctx,
  RmqContext,
  MessagePattern,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('notification')
  public async execute(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('here');
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();

    console.log('data', data);
    if (data.type === 'mail') {
      //TODO: implement mail logic and insert in mongo
    } else if (data.type === 'sms') {
      //TODO: implement sms logic and insert in mongo
    }
    channel.ack(originalMessage);
  }
}
