
// Auth
export interface AuthState {
    isAuthenticated: boolean | null;
    token?: string | null;
    isLoading: boolean;
    isRegister: boolean;
    isError: boolean | null;
    error: any;
    user?: {
        _id: string;
        firstName: string;
        lastName: string;
        phoneNumber?: Number | undefined | string;
        email: string;
        pinned_items?: [];
        role: string;
    } | null;
}

export interface UserState {
    isLoading: boolean;
    isError: boolean | null;
    error: any;
    users?: [];
    user?: {
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber?: Number | undefined | string;
        imgSRC?: string;
        pinned_items?: [];
        role: string;
    } | null;
}


export type FormRegisterInputs = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type FormLoginInputs = {
    email: string;
    password: string;
};

export interface IRootState {
    app: AppState;
    auth: AuthState;
    user: UserState;
    // Other slices of your Redux state...
}

export interface AppState {
    // Properties related to the App state...
}

// Layout
type LayoutProps = {
    children?: ReactNode;
    isAuthenticated?: any;
};