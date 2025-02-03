export interface NameValuePair {
    name: string;
    value: any;
}

export interface RestApiDataSource {
    serverName: string;
    url: string;
    verb?: string;
    responseType?: string;

    headerValues?: [NameValuePair];
    bodyValues?: [NameValuePair];
}
