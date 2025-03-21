import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { CompanyDTO } from '../../../models/companyDTO';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

constructor(private _httpClient:HttpClient) 

  { }

  public getCompanyLogo(): Observable<CompanyDTO> {
    return this._httpClient.get<CompanyDTO>(`${environment.apiUrl}/Company/GetCompany`)
  }
  
  public updateCompany(companyDTO:CompanyDTO){
    return this._httpClient.post<CompanyDTO>(`${environment.apiUrl}/Company/UpdateCompany`,companyDTO)
  }
}
