import { Action } from './action.model';

export interface ActionRequestModel {
    action: Action;
    inputDetails: any;
    rows: any[];
}

export interface ActionResultModel {
    success: boolean;
    message: string;
}
