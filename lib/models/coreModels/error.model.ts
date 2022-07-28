import { ZuluDateHelper } from '../zuluDate.helper';

export class ErrorModel {
    errorId?: number;
    source?: string;
    message: string;
    dateRecorded: Date | null;
    stackTrace?: string;
    userId?: string;

    constructor(err: Error) {
        this.message = err.message;
        this.dateRecorded = ZuluDateHelper.setGMTDate(new Date());
    }
}
