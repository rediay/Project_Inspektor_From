export class ThirdPartyTypeListDTO {
    // thirdpartyTypeList: ThirdPartyTypeDTO[];
    //user: UserDTO;
}

export class ThirdPartyTypeDTO {
    id: number;
    name: string;
    status: boolean;
    createdAt:string;
    listType:any;
    constructor(){
        this.id = 0;
        this.name ='';
        this.status = false;
        this.createdAt = '';
    }
    //user: UserDTO;
}