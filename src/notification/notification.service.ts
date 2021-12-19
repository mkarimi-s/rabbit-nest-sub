import { Injectable } from '@nestjs/common';
import { notificationDto } from './dto/notification.dto';
import { Sender } from './sender/sender';
import { MailSender } from './sender/mail.sender';
import { SmsSender } from './sender/sms.sender';

@Injectable()
export class NotificationService {
  send(data: notificationDto) {
    if (data.type === 'mail') {
      new Sender(new MailSender(), data).send();
    } else if (data.type === 'sms') {
      new Sender(new SmsSender(), data).send();
    }
  }
}
