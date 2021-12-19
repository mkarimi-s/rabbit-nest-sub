import { SenderInterface } from './sender.interface';
import { notificationDto } from '../dto/notification.dto';

export class MailSender implements SenderInterface {
  send(data: notificationDto) {
    console.log('mail', data);
  }
}
