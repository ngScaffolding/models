/* eslint-disable @typescript-eslint/naming-convention */
import { BaseEntity } from './baseEntity.model';
import { InputDetail } from '../inputBuilderModels/inputDetail.model';
import { InputBuilderDefinition } from '../inputBuilderModels/inputBuilderDefinition.model';

// eslint-disable-next-line no-shadow
export enum PreferenceTypes {
  UserPrefs_Profile = 'UserPrefs_Profile',
  UserPrefs_NotificationSubscription = 'UserPrefs_NotificationSubscription',
  UserPrefs_Language = 'Language'
}

export interface UserPreferenceDefinition extends BaseEntity {
  inputDetails: InputDetail | InputBuilderDefinition;
  enabled?: boolean;
}

export interface UserPreferenceValue extends BaseEntity {
  userId: string;
  value: string;
}
