import {NotificationDto} from "../dto/notification.dto";

export interface SenderInterface {
    send(data: NotificationDto): void;
}
