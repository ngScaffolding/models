import { BaseEntity } from '../coreModels/baseEntity.model';

export interface ColumnModel extends BaseEntity {
        // dateTimeColumn, dateColumn, numericColumn, hyperLink
        type?: string;

    field?: string;

    cellClass?: string;
    tooltipField?: string;
    headerName?: string;
    headerClass?: string;
    headerTooltip?: string;
    wrapHeaderText?: boolean;
    autoHeaderHeight?: boolean;
    pinned?: string; // left or right
    suppressMenu?: boolean;
    filter?: boolean;

    autoHeight?: boolean;
    wrapText?: boolean;
    
    // sort direction enum
    sort?: any;
    sortable?: boolean;
    sortIndex?: number;


    hide?: boolean;
    width?: number;
    minWidth?: number;
    maxWidth?: number;
    flex?: number;
    resizable?: boolean;

    // Register the below in gridExtensions Service
    // javascript function to format value display
    valueFormatter?: string;
    // angular component that allows full-html rendering in a cell
    cellRenderer?: string;

    cellClassRules?: { [cssClassName: string]: string | ((params: any) => boolean) };

    // Link & Action Buttons
    destinationUrl?: string;
    target?: string;
    buttonTitle?: string;
    buttonIcon?: string;
    requiredValues?: [string];

    // glyph count column
    icon?: string;
    toolText?: string;

    rowGroup?: boolean;
    enableRowGroup?: boolean;
    rowGroupIndex?: number;

    aggFunc?: string;
}
