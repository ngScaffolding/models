import { ActionResultModel } from '../coreModels/actionRequest.model';

export interface DataResults {
    // Retrieval from EntityStore
    key?: string;
    // Used to mark the Results as not yet populated
    inflight?: boolean;
    error?: string;

    // When this dataset expires in seconds
    expiresSeconds?: number;

    // Used client side to identify when this actually expires
    expiresWhen?: Date;

    rowCount?: number;
    jsonData?: any;
    results?: ActionResultModel[];
}
