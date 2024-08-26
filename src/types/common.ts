export type Nullable<D> = D | null;
export type Empty<D> = D | undefined;
export type ObjectType<T> = {[x in string]: T};

export type SelectedType<T> = {
    name: T;
    selected: boolean;
    id?: number | string;
}

export interface ICommonData {
    created_at: string;
    updated_at: string;
    synced: boolean;
    id: number;
}

export type CommonAction<T, P = never> = {
    type: T,
    payload?: P,
};

export interface ISearchParams {
    pageKey?: string;
    limit?: number;
}