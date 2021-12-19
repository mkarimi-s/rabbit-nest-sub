import { Controller } from '@nestjs/common';
import { notificationDto } from './dto/notification.dto';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @MessagePattern('notification')
  public async execute(
    @Payload() data: notificationDto,
    @Ctx() context: RmqContext,
  ) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    this.notificationService.send(data);
    channel.ack(originalMessage);
  }
}
