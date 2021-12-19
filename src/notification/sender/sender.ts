import { SenderInterface } from './sender.interface';
import { notificationDto } from '../dto/notification.dto';

export class Sender {
  private sender: SenderInterface;
  private data: notificationDto;

  constructor(sender: SenderInterface, data: notificationDto) {
    this.sender = sender;
    this.data = data;
  }

  public send() {
    this.sender.send(this.data);
  }
}
