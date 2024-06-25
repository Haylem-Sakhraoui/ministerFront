
export interface Claim { 
    id?: number;
    content?: string;
    status?: Claim.StatusEnum;
    response?: string;
    creation_Date?: number;
}
export namespace Claim {
    export type StatusEnum = 'IN_PROGRESS' | 'RESLOVED';
    export const StatusEnum = {
        InProgress: 'IN_PROGRESS' as StatusEnum,
        Resloved: 'RESLOVED' as StatusEnum
    };
}


