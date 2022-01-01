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
import { SenderInterface } from './sender/sender.interface';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name)
    private notificationModel: Model<NotificationDocument>,
    private mailService: MailService,
    private httpService: HttpService,
  ) {}

  send(data: NotificationDto) {
    let sender: SenderInterface;
    if (data.type === 'mail') {
      sender = new MailSender(this.mailService);
    } else if (data.type === 'sms') {
      sender = new SmsSender(this.httpService);
    }
    new Sender(sender, data).send();
  }

  store(notification: Notification): Promise<Notification> {
    const newNotification = new this.notificationModel(notification);
    return newNotification.save();
  }
}
