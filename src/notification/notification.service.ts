import { Injectable } from '@nestjs/common';
import { notificationDto } from './dto/notification.dto';
import { Sender } from './sender/sender';
import { MailSender } from './sender/mail.sender';
import { SmsSender } from './sender/sms.sender';
import { MailService } from '../mail/mail.service';

@Injectable()
export class NotificationService {
  constructor(private mailService: MailService) {}
  send(data: notificationDto) {
    if (data.type === 'mail') {
      new Sender(new MailSender(this.mailService), data).send();
    } else if (data.type === 'sms') {
      new Sender(new SmsSender(), data).send();
    }
  }
}
