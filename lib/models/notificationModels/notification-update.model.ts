export interface NotificationUpdate {
  id: string;
  entityType?: string;
  operationName?: string;
  userId?: string;
  objectId?: string;
  payload?: any;
  isSeen?: boolean;
  icon?: string;
  route?: string;
  tooltip?: string;
  when?: Date;
}
