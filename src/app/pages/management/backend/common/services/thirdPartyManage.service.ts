import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment.prod';
import {ThirdPartyTypeDTO, ThirdPartyTypeListDTO} from '../../../models/ThirdPartyTypeDTO';

@Injectable({
  providedIn: 'root'
})
export class thirdPartyManageService {

constructor(private http: HttpClient) { }


public getByCompanyID(): Observable<ThirdPartyTypeDTO[]> {
  return this.http.get<ThirdPartyTypeDTO[]>(`${environment.apiUrl}/ThirdPartyType/GetByCompanyID`)
}

public updateThirdPartyType(thirdPartyTypeListDTO:ThirdPartyTypeListDTO){
  return this.http.post<ThirdPartyTypeListDTO>(`${environment.apiUrl}/ThirdPartyType/UpdateThirdPartyType`,thirdPartyTypeListDTO)
}

public createThirdPartyType(thirdPartyTypeListDTO:ThirdPartyTypeListDTO){
  return this.http.post<ThirdPartyTypeListDTO>(`${environment.apiUrl}/ThirdPartyType/CreateThirdPartyType`,thirdPartyTypeListDTO)
}

public deleteThirdPartyType(ThirdPartyTypeId:string){
  let httpParams = new HttpParams()
    .append("ThirdPartyTypeId", ThirdPartyTypeId)
  //const params = new HttpParams({ fromObject: { ThirdPartyTypeId } });
  return this.http.post<string>(`${environment.apiUrl}/ThirdPartyType/DeleteThirdPartyType`,null,{params : httpParams})
}


}
