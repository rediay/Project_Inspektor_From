export class BulkQueryResponseDTO {
    query: QueryDTO;
    lists: any[];
    ownLists: any[];
    procuraduria: any[];
    ramaJudicial: any[];
    ramaJudicialJEMPS: any[];
}

export class QueryDTO {
    id: number;
    idQueryCompany: number;
    userId: number;
    companyId: number;
    queryTypeId: number;
    createdAt: string;
    updatedAt: string;
    user: any;
}

export class BulkQueryServicesAdditionalDTO {
    id: number;
    attorneyService: boolean;
    judicialBranchService: boolean;
    jempsJudicialBranchService: boolean;
    createdAt: Date;
    consultingStatus: boolean;
    currentConsulting: number;
    totalConsulting: number;
    userId: number;
    companyId: number;
    Process: string;
}
