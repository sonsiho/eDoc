export interface BaseReponse {
    message: string;
    success: boolean;
}

export interface BaseReponseModel<T> extends BaseReponse {
    data: T;
}