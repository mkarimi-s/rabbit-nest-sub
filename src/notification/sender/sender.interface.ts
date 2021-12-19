import { notificationDto } from '../dto/notification.dto';

export interface SenderInterface {
  send(data: notificationDto);
}
