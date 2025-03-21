export class NewsPaginationFilter {
    perPage: number = 10;
    pageNumber: number = 1;
    title?: string;
    categoryId?: number;
    countryId?: number;
    typeId?:number
    startDate?: string;
    endDate?: string;
}
