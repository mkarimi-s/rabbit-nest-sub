import {SenderInterface} from "./sender-interface";
import {NotificationDto} from "../dto/notification.dto";

export class SmsSender implements SenderInterface{
    send(data: NotificationDto): void {
        console.log('sms sender');
    }
}
