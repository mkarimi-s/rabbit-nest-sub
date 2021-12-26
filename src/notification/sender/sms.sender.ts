import { SenderInterface } from './sender.interface';
import { NotificationDto } from '../dto/notification.dto';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SmsSender implements SenderInterface {
  constructor(private httpService: HttpService) {}
  send(data: NotificationDto) {
    const sendObject = {
      receptor: data.to,
      message: data.message,
      sender: process.env.KAVENEGAR_SENDER,
    };

    this.createMessage(sendObject).subscribe((res) => {
      console.log(res.status);
    });
  }

  createMessage(payload): Observable<any> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const querystring = require('querystring');

    return this.httpService.post(
      'https://api.kavenegar.com/v1/' +
        process.env.KAVENEGAR_KEY +
        '/sms/send.json',
      querystring.stringify(payload),
    );
  }
}
