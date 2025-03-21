import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { OwnListsDTO } from '../models/OwnListDTO';
import {OwnListsTypesDTO, OwnListTypesDTO} from '../models/OwnListTypesDTO';

@Injectable({
  providedIn: 'root'
})
export class TypeownlistsService {

  constructor(private http: HttpClient) 
  { }


  public getOwnListsTypes(CompanyId: string): Observable<OwnListsTypesDTO> {
    const params = new HttpParams({ fromObject: { CompanyId } });
    return this.http.get<OwnListsTypesDTO>(`${environment.apiUrl}/OwnListTypes/GetOwnListTypes`,{params})
  }
  
  public updateOwnLists(ownListsTypesDTO:OwnListsTypesDTO){
    return this.http.post<OwnListsTypesDTO>(`${environment.apiUrl}/OwnListTypes/UpdateOwnListTypes`,ownListsTypesDTO)
  }
  
  public createOwnList(ownListsTypesDTO:OwnListsTypesDTO){
    return this.http.post<OwnListsTypesDTO>(`${environment.apiUrl}/OwnListTypes/CreateOwnListType`,ownListsTypesDTO)
  }
  
  public deleteOwnList(id:string){
    let httpParams = new HttpParams()
      .append("id", id)
    //const params = new HttpParams({ fromObject: { ThirdPartyTypeId } });
    return this.http.post<string>(`${environment.apiUrl}/OwnListTypes/DeleteOwnListType`,null,{params : httpParams})
  }

  public getOwnListsTypes2(CompanyId: string): Observable<OwnListTypesDTO[]> {
    const params = new HttpParams({ fromObject: { CompanyId } });
    return this.http.get<OwnListTypesDTO[]>(`${environment.apiUrl}/OwnListTypes/GetOwnListTypes`,{params})
  }

  public importOwnLists(formData: FormData): Observable<boolean> {
    return this.http.post<boolean>(`${environment.apiUrl}/OwnListTypes/ImportOwnLists`, formData)
  }

  public deleteImportedOwnListsByType(ownListTypeId: number): Observable<boolean> {
    return this.http.post<boolean>(`${environment.apiUrl}/OwnListTypes/DeleteImportedOwnListsByType/${ownListTypeId}`, null)
  }
}
