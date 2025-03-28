/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-shadow */
import { BaseEntity } from './baseEntity.model';

export interface AppSettingsValue extends BaseEntity {
    value: any;
}

export enum AppSettings {
    title = 'title',
    mobiletitle = 'mobileTitle',
    iconUrl = 'iconUrl',

    // Error Handling
    errorShowUser = 'errorShowUser',
    errorLogConsole = 'errorLogConsole',
    errorLogServer = 'errorLogServer',
    pageNotFoundText = 'pageNotFoundText',

    // Auth Settings
    authSaveinLocalStorage = 'authSaveinLocalStorage',
    authShowRememberMe = 'authShowRememberMe',
    authShowForgotPassword = 'authShowForgotPassword',
    authShowRegister = 'authShowRegister',
    authTermsAndConditions = 'authTermsAndConditions',
    authClientId = 'authClientId',
    authClientSecret = 'authClientSecret',
    authScope = 'authScope',
    authUserIdIsEmail = 'authUserIdIsEmail',
    authUserUniqueField = 'authUserUniqueField',
    authTokenEndpoint = 'authTokenEndpoint',
    authPasswordMinLength = 'authPasswordMinLength',
    authPasswordUpperCase = 'authPasswordUpperCase',
    authPasswordLowerCase = 'authPasswordLowerCase',
    authPasswordNumeric = 'authPasswordNumeric',
    authPasswordSpecial = 'authPasswordSpecial',
    authRequiredRole = 'authRequiredRole',
    authUseMfa = 'authUseMfa',
    authUseMfaEmail = 'authUseMfaEmail',
    authUseMfaMSA = 'authUseMfaMSA',
    authUseMfaSMS = 'authUseMfaSMS',

    // OAuth Settings block
    authOAuthSettings = 'authOAuthSettings',

    // Screen Furniture
    showFooter = 'showFooter',
    showTopNotifications = 'showTopNotifications',
    showTopSearch = 'showTopSearch',
    showTopProfile = 'showTopProfile',
    showFullMessages = 'showFullMessages',
    showToastMessages = 'showToastMessages',
    showProfileSetting = 'showProfileSetting',
    showProfilePicture = 'showProfilePicture',
    showUserSetting = 'showUserSetting',
    menuType = 'menuType',
    compactMode = 'compactMode',
    agGridTheme = 'agGridTheme',

    // Input Builder
    inputShowCalendarIcon = 'inputShowCalendarIcon',
    inputDateTimeFormat = 'inputDateTimeFormat',
    inputDateFormat = 'inputDateFormat',
    inputDateForceUTC = 'inputDateForceUTC',
    inputDateShowButtonBar = 'inputDateShowButtonBar',

    // File Uploads
    maximumFileSize = 'maximumFileSize',
    allowedFileTypes = 'allowedFileTypes', // '.doc|.xlsx|audio/*|video/*|image/*'  See: https://www.w3schools.com/tags/att_input_accept.asp

    // moment Formats for dates
    dateTimeFormat = 'dateTimeFormat',
    dateFormat = 'dateFormat',

    // DataGrid Options
    dataGridIconToolBar = 'dataGridIconToolBar',
    dataGridAllowConfigureColumns = 'dataGridAllowConfigureColumns',
    dataGridAllowExport = 'dataGridAllowExport',
    dataGridAllowSaveView = 'dataGridAllowSaveView',
    dataGridAllowResetView = 'dataGridAllowResetView',
    dataGridAllowShareView = 'dataGridAllowShareView',
    dataGridUseEnterprise = 'dataGridUseEnterprise',

    // Dashboard Settings
    dashboardDefaultConfig = 'dashboardDefaultConfig',

    // User Preferences
    prefHideTheme = 'prefHideTheme',

    apiHome = 'apiHome',
    apiServers = 'apiServers',

    cacheDefaultSeconds = 'cacheDefaultSeconds',

    // Mobile settings
    isMobile = 'isMobile',
    mobileTitle = 'mobileTitle',
    mobileCacheNames = 'mobileCacheNames',
    mobileDefaultTimeout = 'mobileDefaultTimeout',
    mobileDefaultRetries = 'mobileDefaultRetries',
    mobileDefaultPolling = 'mobileDefaultPolling',

    // Stock module settings
    isStockEnabled = 'isStockEnabled',
}
