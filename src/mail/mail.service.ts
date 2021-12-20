import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { notificationDto } from '../notification/dto/notification.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendVerificationEmail(data: notificationDto) {
    await this.mailerService.sendMail({
      to: data.to,
      from: 'info@odin.com',
      subject: 'Verification Code',
      template: './verification',
      context: {
        message: data.message,
      },
    });
  }
}
