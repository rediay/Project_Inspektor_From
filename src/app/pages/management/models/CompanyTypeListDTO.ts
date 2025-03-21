export class CompanyTypeListsDTO {
    companyList:CompanyTypeListDTO[];
}

export class CompanyTypeListDTO {
    id: number;
    search: boolean;
    name: string;
    companyId: number;
    createdAt: string;
    updatedAt: string;
    listType: any;
    constructor(){
        this.id=0;
        this.search= false;
        this.name= " ";
        this.companyId=  0;
        this.createdAt= " ";
        this.updatedAt= " "; 
        this.listType= {}; 
    }
}