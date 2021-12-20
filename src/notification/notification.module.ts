import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { MailModule } from '../mail/mail.module';
import { MailService } from '../mail/mail.service';

@Module({
  imports: [MailModule],
  controllers: [NotificationController],
  providers: [NotificationService, MailService],
})
export class NotificationModule {}
