import { SenderInterface } from './sender.interface';
import { notificationDto } from '../dto/notification.dto';
import { MailService } from '../../mail/mail.service';

export class MailSender implements SenderInterface {
  constructor(private mailService: MailService) {}
  async send(data: notificationDto) {
    await this.mailService.sendVerificationEmail(data);
  }
}
