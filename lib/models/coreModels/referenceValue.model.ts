import { BaseDataSource } from '../dataSourceModels/base.dataSource.model';
import { BaseEntity } from './baseEntity.model';

export interface ReferenceValue extends BaseEntity {
  // Used to store both name and seed in State Management. Not for users.
  compositeKey?: string;

  // type: string;
  value?: string;
  cacheSeconds?: number;

  // Filled by code when retrieved for cache reasons
  whenStored?: Date;

  roles?: string[];
  inputDetails?: string;

  // Possible to Hard code values Here
  referenceValueItems?: ReferenceValueItem[];

  // OR

  // Used to populate from dataSource
  dataSourceName?: string;
  dataSource?: BaseDataSource;
  displayProperty?: string;
  valueProperty?: string;
  itemOrderProperty?: string;
  subtitleProperty?: string;
  subtitle2Property?: string;
  subtitle3Property?: string;
  metaProperty?: string;
  meta2Property?: string;
  meta3Property?: string;
  rolesProperty?: string;
  includeNoneOption?: boolean;
}

export interface ReferenceValueItem {
  display: string;
  value: string;
  subtitle?: string;
  subtitle2?: string;
  subtitle3?: string;
  itemOrder?: number;
  meta?: any;
  meta2?: any;
  meta3?: any;
  roles?: string[];
  inactive?: boolean;

  // Allow Infinite Nesting of Reference Values Here
  referenceValueItems?: ReferenceValueItem[];
}
