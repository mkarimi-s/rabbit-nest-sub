import { Controller } from '@nestjs/common';
import { NotificationDto } from './dto/notification.dto';
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
    @Payload() data: NotificationDto,
    @Ctx() context: RmqContext,
  ) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    this.notificationService.send(data);
    await this.notificationService.store(data);
    channel.ack(originalMessage);
  }
}
