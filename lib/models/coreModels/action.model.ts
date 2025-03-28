/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-shadow */
import { BaseDataSource } from '../dataSourceModels/base.dataSource.model';
import { InputBuilderDefinition } from '../inputBuilderModels/inputBuilderDefinition.model';
import { BaseEntity } from './baseEntity.model';

export const enum ButtonColours {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  info = 'info',
  warning = 'warning',
  danger = 'danger',
  blue = 'blue',
  cyan  = 'cyan',
  teal  = 'teal',
  orange  = 'orange',
  deeporange = 'deeporange',
  purple  = 'purple',
  indigo  = 'indigo',
  pink  = 'pink'
}

export const enum ActionTypes {
  angularComponent = 'angularComponent',
  dataSource = 'dataSource'
}

export interface Action extends BaseEntity {
  type?: ActionTypes; // angularComponent
  title?: string;

  icon?: string; // Example ''
  colour?: string;

  // Does this Action appear in a Grid column?
  columnButton?: boolean;

  // Do we need to have atleast one Soure selected?
  selectionRequired?: boolean;

  // After Action completes, remove these DataSources from cache
    flushReferenceValues?: string | Array<string>;

  // Does the action work on multiple rows?
  multipleTarget?: boolean;

  // Message to show on Confirmation of Action
  confirmationMessage?: string;

  idField?: string;
  idValue?: string;
  readOnly?: boolean;

  entityType?: string;
  additionalProperties?: any;
  inputBuilderDefinition?: InputBuilderDefinition;
  refresh?: boolean;

  isAudit?: boolean;

  // Done message
  successMessage?: string;
  successToast?: boolean;
  // Not done
  errorMessage?: string;
  errorToast?: boolean;

  // For SQL this contains the SQL Command ID
  dataSourceName?: string;
  dataSource?: BaseDataSource;
  // Angular Controller content
  angularComponent?: string;
  dialogOptions?: DialogOptions;

  // Standard Url
  url?: string;
  target?: string;

  // Notifcation Details - Action Data Posted to Notification
  notificationDetailsName?: string;
}

export interface DialogOptions {
  header?: string;
  width?: number;
  height?: number|any;
  maximizable?: boolean;
  closable?: boolean;
}
