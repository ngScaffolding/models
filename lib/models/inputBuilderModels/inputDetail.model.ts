import { InputBuilderDefinition } from './inputBuilderDefinition.model';
import { BaseEntity } from '../coreModels/baseEntity.model';
import { ReferenceValueItem } from '../coreModels/referenceValue.model';

export interface BaseInput {
    name?: string;
    label?: string;
    type?: InputTypes;
}

// eslint-disable-next-line no-shadow
export enum InputTypes {
    null = 'null',
    textbox = 'textbox',
    number = 'number',
    email = 'email',
    password = 'password',
    textarea = 'textarea',
    datetime = 'datetime',
    date = 'date',
    time = 'time',
    select = 'select',
    switch = 'switch',
    editor = 'editor',
    listbox = 'listbox',
    colourpicker = 'colourpicker',
    spinner = 'spinner',
    slider = 'slider',
    checkbox = 'checkbox',
    tricheckbox = 'tricheckbox',
    tree = 'tree',
    selectbutton = 'selectbutton',
    togglebutton = 'togglebutton',
    radio = 'radio',
    radiobuttons = 'radiobuttons',
    dropdown = 'dropdown',
    rating = 'rating',
    autocomplete = 'autocomplete',
    multiselect = 'multiselect',
    chips = 'chips',
    keyfilter = 'keyfilter',
    fileattach = 'fileattach',
    dynamic = 'dynamic',
    search = 'search',
    repeatform = 'repeatform',
    json = 'json',
    barcode = 'barcode',
    multiplescan = 'multiplescan',
    signature = 'signature'
}
export interface InputDetail extends BaseEntity {
    label?: string;
    type?: InputTypes;
    placeholder?: string;
    help?: string;
    comparison?: string;
    allowcomparisonchange?: string;
    containerClass?: string; // Either full 12 cols or smaller if help present
    classes?: string;
    hidden?: boolean;
    tabindex?: number;

    inputMode?: string; // Control keyboard type on mobile "none", "text", "tel", "url", "email", "numeric", "decimal", and "search"

    readonly?: boolean;

    // default value
    // date: today, tomorrow, yesterday, -1, -365, 30
    value?: any;

    validateRequired?: string; // Providing a message here infer Required
    validateRequiredTrue?: string; // Providing a message here infer RequiredTrue

    validateEmail?: string; // Providing a message here infer RequiredEmail

    validatePattern?: string;
    validatePatternMessage?: string;

    validateMin?: number;
    validateMinMessage?: string;

    validateMax?: number;
    validateMaxMessage?: string;

    validateMinLength?: number;
    validateMinLengthMessage?: string;

    validateMaxLength?: number;
    validateMaxLengthMessage?: string;
}

export interface InputDetailForm extends InputDetail {
    inputBuilderDefinition?: InputBuilderDefinition;
}

export interface InputDetailFile extends InputDetail {}

export interface InputDetailTextBox extends InputDetail {
    mask?: string; // 999-999
}

export interface InputDetailDateTime extends InputDetail {
    forceUTC: boolean;
}

export interface InputDetailReferenceValues extends InputDetail {
    referenceValueName?: string; // Used for select items
    referenceValueChildLevel?: number; // Where the Reference data contains children, which level down do we go
    datasourceItems?: Array<ReferenceValueItem>; // Results of the datasource stored here for binding
    referenceValueSeedDependency?: string; // Name of control to use as seed for this DataSource... Used linked Dropdowns
    referenceValueSeedValue?: any; // Set to a specific value used in search
    referenceValueSeedName?: string; // set to name, when changed use this value in search
    
    returnsObject?: boolean; // When set the full ReferenceValueItem object is returned
}

export interface InputDetailDropdown extends InputDetailReferenceValues {
    selectFilter?: boolean; // Show Filter on Select Dropdown
    selectFilterBy?: string; // Fields to filter by on Select DropDown
    selectFilterPlaceholder?: string; // Placeholder for Filter input
}

export interface InputDetailToggleButton extends InputDetail {}
export interface InputDetailMultipleScan extends InputDetail {
    expectedCount: number;
}
export interface InputDetailTextArea extends InputDetail {
    rows?: number; // Rows for TextArea
}

export interface InputDetailSlider extends InputDetail {
    min?: number;
    max?: number;
    step?: number;
}

export interface InputAutoCompete extends InputDetailReferenceValues {}

export interface FileAttach extends InputDetail {
    // Pattern to restrict the allowed file types such as "image/*".
    accept: string;
    // Maximum file size allowed in bytes.
    maxFileSize: number;
}

export interface InputDynamic extends InputDetail {
    angularComponent?: string; // name of component to generate
    additionalProperties?: any; // passed to components input
}
