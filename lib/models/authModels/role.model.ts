import { BaseEntity } from '../coreModels/baseEntity.model';

export interface Role extends BaseEntity {

    description: string;

    // To administer this role you need to belong to this group
    adminRole: string;

}
