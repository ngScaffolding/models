import { BaseDataSource } from './base.dataSource.model';

export interface MongoDBDataSource extends BaseDataSource {
    connection: string;
    connectionOptions: any;

    databaseName: string;
    collectionName: string;

    find: string;
    aggregatePipeLine: string;
}
