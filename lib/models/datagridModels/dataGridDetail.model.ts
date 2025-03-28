import { ColumnModel } from './column.model';
import { InputBuilderDefinition } from '../inputBuilderModels/inputBuilderDefinition.model';
import { Action } from '../coreModels/action.model';
import { BaseDataSource } from '../dataSourceModels/base.dataSource.model';

export interface DataGridDetail {
    title?: string;

    disableCheckboxSelection?: boolean;
    waitForInput?: boolean;

    pageSize?: number;
    infiniteScroll?: boolean;

    // No save functions
    readOnly?: boolean;

    // Remove unnecessary screen furniture
    isDataIsland?: boolean;

    // Toolbar settings
    hideToolbar?: boolean;

    detailUrl?: string;
    detailTarget?: string;

    serverPagination?: boolean;
    serverSorting?: boolean;
    serverGrouping?: boolean;

    defaultSort?: string;

    columns: Array<any>;
    addAllColumns?: boolean; 

    configuredColumns?: Array<any>;
    isActionColumnSplitButton?: any;
    bypassAutoSizeColumns?: boolean;

    filtersLocation?: string;

    filters?: InputBuilderDefinition;

    // row class rules for conditional formatting
    rowClassRules?: { [cssClassName: string]: string | ((params: any) => boolean) };

    // Value passed to datasources
    seedValue?: string;

    // Get data from dataSource
    selectDataSourceName?: string;
    selectDataSource?: BaseDataSource;

    // Or here is the data
    dataValues?: any;

    actions?: Array<Action>;

    // Number of group levels to expand
    groupDefaultExpanded?: number;
}
