export interface DataSourceRequest {
  name: string | string[];
  seed?: string;
  filterValues?: any;
  rowData?: any[];
  inputData?: any;

  fileNames?: File[];

  // Pass forceRefresh = true to get the latest value no matter what has gone before
  forceRefresh?: boolean;

  // e.g. Used to pass objects to create and update
  body?: any;

  // Pagination
  skip?: number;
  take?: number;
}
