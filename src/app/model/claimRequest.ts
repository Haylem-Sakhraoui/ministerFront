
export interface ClaimRequest {
    id?: number;
    content?: string;
    status?: ClaimRequest.StatusEnum;
    response?: string;
}
export namespace ClaimRequest {
    export type StatusEnum = 'IN_PROGRESS' | 'RESLOVED';
    export const StatusEnum = {
        InProgress: 'IN_PROGRESS' as StatusEnum,
        Resloved: 'RESLOVED' as StatusEnum
    };
}


