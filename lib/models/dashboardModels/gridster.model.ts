export declare abstract class GridsterItemComponentInterface {
    item: GridsterItem;
    $item: GridsterItem;
    top: number;
    left: number;
    width: number;
    height: number;
    drag: any;
    resize: any;
    notPlaced: boolean;
    updateOptions: () => void;
    itemChanged: () => void;
    setSize: () => void;
    checkItemChanges: (newValue: GridsterItem, oldValue: GridsterItem) => void;
    canBeDragged: () => boolean;
    canBeResized: () => boolean;
    bringToFront: (offset: number) => void;
    sendToBack: (v: number) => void;
    el: HTMLElement;
    gridster: any;
    renderer: any;
}
export interface GridsterItem {
    x: number;
    y: number;
    rows: number;
    cols: number;
    layerIndex?: number;
    initCallback?: (item: GridsterItem, itemComponent: GridsterItemComponentInterface) => void;
    dragEnabled?: boolean;
    resizeEnabled?: boolean;
    compactEnabled?: boolean;
    maxItemRows?: number;
    minItemRows?: number;
    maxItemCols?: number;
    minItemCols?: number;
    minItemArea?: number;
    maxItemArea?: number;
    [propName: string]: any;
}