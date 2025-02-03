/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-shadow */
export enum ParameterTypes {
    String = 'string',
    Number = 'number',
    Boolean = 'boolean',
    Date = 'date',
    Binary = 'binary'
}

export interface ParameterDetail {
    name: string;
    type: ParameterTypes;
    value: any;
    sourceProperty: string;
}
