export class OwnListsDTO {
    OwnLists: OwnListDTO[];

}
export class OwnListDTO {
    id: number;
    name: string;
    identification: string;
    typeIdentification: string;
    documentType: string;
    source: string;
    alias: string;
    crime: string;
    link: string;
    moreInformation: string;
    zone: string;
    constructor(){
    this.id= 0;
    this.name= '';
    this.identification= ' ';
    this.typeIdentification= ' ';
    this.documentType= ' ';
    this.source= ' ';
    this.alias = ' ';
    this.crime= ' ';
    this.link= ' ';
    this.moreInformation= ' ';
    this.zone= ' ';
    }
}
