import {SenderInterface} from "./sender-interface";
import {NotificationDto} from "../dto/notification.dto";

export class Sender {
    private senderType: SenderInterface;
    private readonly data: NotificationDto;


    constructor(senderType: SenderInterface, data: NotificationDto) {
        this.senderType = senderType;
        this.data = data;
    }

    public sendNotification() {
        this.senderType.send(this.data)
    }
}
