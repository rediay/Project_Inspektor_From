export class OwnListsTypesDTO {
    OwnListsTypes: OwnListTypesDTO[];
}

export class OwnListTypesDTO {
    id: number;
    name: string;

    constructor() {
        this.id = 0;
        this.name = '';
    }
}
