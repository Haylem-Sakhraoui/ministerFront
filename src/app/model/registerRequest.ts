

export interface RegisterRequest { 
    email?: string;
    password?: string;
    role?: RegisterRequest.RoleEnum;
    enable?: boolean;
}
export namespace RegisterRequest {
    export type RoleEnum = 'SUPER_ADMIN' | 'MINISTER_ADMIN';
    export const RoleEnum = {
        SuperAdmin: 'SUPER_ADMIN' as RoleEnum,
        MinisterAdmin: 'MINISTER_ADMIN' as RoleEnum
    };
}


