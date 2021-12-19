import { SenderInterface } from './sender.interface';
import { notificationDto } from '../dto/notification.dto';

export class SmsSender implements SenderInterface {
  send(data: notificationDto) {
    console.log('sms',data);
  }
}
