import {Parameter} from "./parameter";

export interface News {
    id?: number;
    title?: string;
    description?: string;
    source?: string;
    date?: string;
    createdAt?: string;
    updatedAt?: string;

    newsCategoryId?: number;
    newsTypeId?: number;
    countryId?: number;

    startDate?: number;

    countries?: Parameter[]
    contentCategories?: Parameter[]
    newsTypes?: Parameter[]
}
