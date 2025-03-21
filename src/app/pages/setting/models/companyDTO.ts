
export class CompanyDTO {
    id: number;
    name: string;
    identification: string;
    status: boolean;
    autoRenewal: boolean;
    image: string;
    contractDate: string;
    constructor(){
        this.id= 0;
        this.name= ' ';
        this.identification= ' ';
        this.status= false;
        this.autoRenewal= false;
        this.image= ' ';
        this.contractDate= ' ';
    }
}