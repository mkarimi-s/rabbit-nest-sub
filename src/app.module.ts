import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotificationModule } from './notification/notification.module';
import { MailModule } from './mail/mail.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI + process.env.MONGO_DB_NAME),
    NotificationModule,
    MailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
