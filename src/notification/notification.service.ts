import { Injectable } from '@nestjs/common';
import {NotificationDto} from "./dto/notification.dto";
import {Sender} from "./sender/sender";
import {EmailSender} from "./sender/email-sender";
import {SmsSender} from "./sender/sms-sender";

@Injectable()
export class NotificationService {

    getMessage(data: NotificationDto): void {
        if(data.type === 'mail') {
            new Sender(new EmailSender(), data).sendNotification();
        }else if (data.type === 'sms') {
            new Sender(new SmsSender(), data).sendNotification();
        }
    }
}
