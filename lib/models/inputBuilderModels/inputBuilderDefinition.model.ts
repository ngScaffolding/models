/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-shadow */
import { InputDetail } from './inputDetail.model';
import { CustomValidator } from './customValidator.model';
import { BaseEntity } from '../coreModels/baseEntity.model';
export const enum OrientationValues {
    Vertical = 'vertical',
    Horizontal = 'horizontal'
}

export const enum InputLocations {
    INLINE = 'inline',
    GRID = 'grid',
    MODAL = 'modal',
    SIDEBARTOP = 'sidebartop',
    SIDEBARRIGHT = 'sidebarright',
    POPOUT = 'popout'
}

export interface InputBuilderDefinition extends BaseEntity {
    // Title if required
    title?: string;

    // Arrange Controls
    orientation?: OrientationValues;

    // Width in Columns of each control group in horizontal mode
    columnCount?: number;

    // Text to show in OK Button. When empty button is hidden
    okButtonText?: string;
    okButtonIcon?: string;
    okButtonCallBack?: (model: any) => void;
    okButtonConfirmation?: string;

    // Text to show in Cancel Button. When empty button is hidden
    cancelButtonText?: string;
    cancelButtonIcon?: string;
    cancelButtonCallBack?: (model: any) => void;
    cancelButtonConfirmation?: string;

    // Array of input details to build in output
    inputDetails?: InputDetail[];

    // Where to display our input values in dashboard etc
    inputLocation?: InputLocations;

    // Load the content of any files into the inputModel
    loadFileContent?: boolean;

    // Custom Button
    customButtonText?: string;
    customButtonIcon?: string;
    customButtonCallBack?: (model: any) => void;
    customConfirmation?: string;

    width?: string;
    height?: string;

    customValidators?: CustomValidator[];

    showClearButton?: boolean;
}
