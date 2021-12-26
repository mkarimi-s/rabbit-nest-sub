import { Injectable } from '@nestjs/common';
import { NotificationDto } from './dto/notification.dto';
import { Sender } from './sender/sender';
import { MailSender } from './sender/mail.sender';
import { SmsSender } from './sender/sms.sender';
import { MailService } from '../mail/mail.service';
import {
  Notification,
  NotificationDocument,
} from './schema/notification.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name)
    private notificationModel: Model<NotificationDocument>,
    private mailService: MailService,
    private httpService: HttpService,
  ) {}

  send(data: NotificationDto) {
    if (data.type === 'mail') {
      new Sender(new MailSender(this.mailService), data).send();
    } else if (data.type === 'sms') {
      new Sender(new SmsSender(this.httpService), data).send();
    }
  }

  store(notification: Notification): Promise<Notification> {
    const newNotification = new this.notificationModel(notification);
    return newNotification.save();
  }
}
