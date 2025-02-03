/* eslint-disable @typescript-eslint/naming-convention */

import { BaseDataSource } from "../dataSourceModels/base.dataSource.model";

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
  triggerDataSource?: BaseDataSource;
  types: NotificationTypes[];

  // Payload
  data: any;

  // Url etc
  target: string;
}
