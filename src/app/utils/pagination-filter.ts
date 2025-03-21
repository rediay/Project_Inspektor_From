export class PaginationFilter {
    query: string;
    perPage: number; 
    pageNumber: number;
    startDate?: string;
    endDate?: string;
    constructor(){
        this.query='';
        this.perPage=20;
        this.pageNumber=1;
        this.startDate='';
        this.endDate='';
    }

}

