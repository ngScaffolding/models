import { NotificationTypes } from './notificationDetails.model';

export interface NotificationSentMessage {
    notificationDetailsName: string;
    userId: string;
    type: NotificationTypes;

    dateSent: Date;
    dateRead: Date;

    expires: Date;

    // Payload
    data: any;

    // Url etc
    target: string;
}
