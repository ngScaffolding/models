/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-shadow */
import { DialogOptions } from './action.model';
import { BaseEntity } from './baseEntity.model';

export const enum MenuTypes {
  Folder = 'folder',
  Dashboard = 'dashboard',
  Datagrid = 'datagrid'
}

export interface CoreMenuItem extends BaseEntity {
  // name is required for indexing
  parent?: string;
  type?: MenuTypes;

  userIds?: string[];
  ownerId?: string;

  isDesktop?: boolean;
  isMobile?: boolean;
  isQuickAdd?: boolean;
  isQuickMenu?: boolean;

  label?: string;
  icon?: string;
  command?: (event?: any) => void;
  url?: string;
  routerLink?: any;
  queryParams?: {
    [k: string]: any;
  };
  items?: CoreMenuItem[] | CoreMenuItem[][];
  expanded?: boolean;
  disabled?: boolean;
  visible?: boolean;
  target?: string;

  // Used when menu item opens popup components
  angularComponent?: string;
  dialogOptions?: DialogOptions;

  routerLinkActiveOptions?: any;
  separator?: boolean;
  badge?: string;
  badgeStyleClass?: string;
  style?: any;
  styleClass?: string;
  title?: string;

  menuDetails?: any;

  order?: number;
}
