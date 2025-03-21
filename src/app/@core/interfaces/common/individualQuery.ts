/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Observable } from 'rxjs';

/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

export interface IndividualQuery {
    companyId: number;
    document:string;
    hasProcuraduria:boolean;
    hasPolice:boolean;
    hasBme:boolean;
    hasRamaJudicialJEMPS:boolean;
    hasSuperSocieties:boolean;
    hasRues:boolean;
    hasMilitary:boolean;
    hasRamaJudicial:boolean;
    hasRegistryDeaths:boolean;
    hasSimit:boolean;
    hasEstadoEPS:boolean;
    hasEstadoPermiso:boolean;
    hasInformacionJudicial:boolean;
    hasAntecedentesCriminales:boolean;
    hasSunat:boolean;
    name:string;
    query:any;
    lists:any[];
    ownLists:any[];
    ramaJudicial:any;
    ramaJudicialJEMPS:any;
    procuraduria:any;
    police:any;
    military:any;
    rues:any;
    registryDeaths:any;
    simit:any;
    eps:any;
    ppt:any;
    superSocieties:any;
    infoJudicialEcuador:any;
    criminalRecordEcuador:any;
    sunat:any;
    bme:any;
    user:any;
    heatMap:any;
    thirdPartyType:any;
    // sendMailPriority1: boolean;
    // mailPriority1: string;
    // sendMailPriority2: boolean;
    // mailPriority2: string;
    // sendMailPriority3: boolean;
    // mailPriority3: string;
    // sendMailPriority4: boolean;
    // mailPriority4: string;
    // sendMailCoincidences: boolean;
    // mailCoincidences: string;
    // sendMailAdditionalServices: boolean;
    // mailAdditionalServices: string;
    // companyId: number;
}
export interface Query {
    id: number;
    idQueryCompany: number;
    userId: number;
    companyId: number;
    createdAt: string;
    updatedAt: string;
}
export abstract class IndividualQueryData {
    abstract makeQuery(individualQuery: IndividualQuery): Observable<IndividualQuery>;
    abstract previusQuery(individualQuery: Query): Observable<Query>;
    
    abstract getQuery(queryId: number): Observable<IndividualQuery>;
}
