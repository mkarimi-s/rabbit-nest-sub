import { Controller } from '@nestjs/common';
import {
    Payload,
    Ctx,
    RmqContext,
    MessagePattern,
} from '@nestjs/microservices';
import {NotificationService} from "./notification.service";

@Controller('notification')
export class NotificationController {

    constructor(private readonly service: NotificationService) {
    }

    @MessagePattern('notification')
    public async execute(@Payload() data: any, @Ctx() context: RmqContext) {
        const channel = context.getChannelRef();
        const originalMessage = context.getMessage();

        this.service.getMessage(data);
        channel.ack(originalMessage);
    }
}
