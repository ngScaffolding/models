export interface BasicUser {
    userId?: string;

    // Only used in creation screen
    modelUserId?: string;
    email?: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    language?: string;

    role?: string[];

    permissions?: string[];

    accessCode?: string;
    accessCodeExpires?: Date;
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createBasicUser(): BasicUser {
    return {
        userId: '',
        email: undefined,
        name: undefined,
        firstName: undefined,
        lastName: undefined,
        role: [],
        language: undefined
    };
}
