export interface BaseEntity {
    name?: string;

    roles?: string[];
    permissions?: string[];
    readPermissions?: string[];
    writePermissions?: string[];
}
