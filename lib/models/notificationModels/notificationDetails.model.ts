/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-shadow */
export const enum NotificationTypes {
    Email,
    Socket,
    Push
}

export interface NotifcationDetails {
    name: string;
    message: string;
    triggerDataSourceName: string;
    types: NotificationTypes[];

    // Payload
    data: any;

    // Url etc
    target: string;
}
