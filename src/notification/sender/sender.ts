import { SenderInterface } from './sender.interface';
import { NotificationDto } from '../dto/notification.dto';

export class Sender {
  private sender: SenderInterface;
  private data: NotificationDto;

  constructor(sender: SenderInterface, data: NotificationDto) {
    this.sender = sender;
    this.data = data;
  }

  public send() {
    this.sender.send(this.data);
  }
}
