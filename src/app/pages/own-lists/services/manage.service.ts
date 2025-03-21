import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { OwnListsDTO } from '../models/OwnListDTO';

@Injectable({
  providedIn: 'root'
})
export class ManageService {


  constructor(private http: HttpClient) 
  { }


  public getOwnLists(CompanyId: string): Observable<OwnListsDTO> {
    const params = new HttpParams({ fromObject: { CompanyId } });
    return this.http.get<OwnListsDTO>(`${environment.apiUrl}/OwnLists/GetOwnLists`,{params})
  }
  
  public updateOwnLists(ownListsDTO:OwnListsDTO){
    return this.http.post<OwnListsDTO>(`${environment.apiUrl}/OwnLists/UpdateOwnLists`,ownListsDTO)
  }
  
  public createOwnList(ownListsDTO:OwnListsDTO){
    return this.http.post<OwnListsDTO>(`${environment.apiUrl}/OwnLists/CreateOwnList`,ownListsDTO)
  }
  
  public deleteOwnList(id:string){
    let httpParams = new HttpParams()
      .append("id", id)
    //const params = new HttpParams({ fromObject: { ThirdPartyTypeId } });
    return this.http.post<string>(`${environment.apiUrl}/OwnLists/DeleteOwnList`,null,{params : httpParams})
  }

}
