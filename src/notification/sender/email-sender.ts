import {SenderInterface} from "./sender-interface";
import {NotificationDto} from "../dto/notification.dto";

export class EmailSender implements SenderInterface {
    send(data: NotificationDto): void {
        console.log('email sender');
    }
}
