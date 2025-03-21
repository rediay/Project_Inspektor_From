import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../../../environments/environment.prod';
import {CompanyTypeListDTO, CompanyTypeListsDTO} from '../../../models/CompanyTypeListDTO';


@Injectable({
  providedIn: 'root'
})
export class CompanytypeListService {

  private urlApi: string;
  private handleError: any;
  private resolveRR: any;
  constructor(private http: HttpClient) { }


  public getTypeList(): Observable<CompanyTypeListsDTO> {

    return this.http.get<CompanyTypeListsDTO>(`${environment.apiUrl}/CompanyTypeList/GetTypeList`)
  }
  public updateStatus(companyTypeListDTO: CompanyTypeListDTO) {
    return this.http.post<string>(`${environment.apiUrl}/CompanyTypeList/UpdateTypeList`, companyTypeListDTO)
  }
  public updateRangeStatus(status: boolean) {
    var st = String(status);    
    let parameters = {"status":st};
    let queryParams = new HttpParams({fromObject:{status:st}});     
    return this.http.post<string>(`${environment.apiUrl}/CompanyTypeList/UpdateRangeTypeList?status=${st}`,null)
  }

}
