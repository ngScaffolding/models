import { GridsterItem } from './gridster.model';
import { WidgetModelBase } from './widget.model';

export interface WidgetDetails extends GridsterItem {
    // Look up Widget Definition
    name: string;

    // Holds the configured input values. These are passed to the relevant dataSource
    configuredValues?: any;

    // Attached at runtime
    widget?: WidgetModelBase;
}
