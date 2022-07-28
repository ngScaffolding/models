export interface DocumentDBDataSource {
    connection: string;

    databaseName: string;
    collectionName: string;

    sqlCommand: string;
}
