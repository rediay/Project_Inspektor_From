import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { BulkQueryResponseDTO, BulkQueryServicesAdditionalDTO } from '../models/bulkQueryResponseDTO';
@Injectable({
  providedIn: 'root'
})
export class BulkQueryService {

constructor(private http: HttpClient) { }
public BulkQuery(formData:FormData) :Observable<BulkQueryResponseDTO> {  
  return this.http.post<BulkQueryResponseDTO>(`${environment.apiUrl}/BulkQueryController/BulkQuery`,formData)
}
public BulkQuerySA(formData:FormData) :Observable<BulkQueryResponseDTO> {  
  return this.http.post<BulkQueryResponseDTO>(`${environment.apiUrl}/BulkQueryController/BulkQueryServicesAdditional`,formData)
}
public getBulkQueryAddiotionalSA(): Observable<BulkQueryServicesAdditionalDTO[]> {
  return this.http.get<BulkQueryServicesAdditionalDTO[]>(`${environment.apiUrl}/BulkQueryController/getBulkQueryServicesAdditionalTable`)
}
public exportExcel(id: Number): Observable<any> {    
  return this.http.get<any>(`${environment.apiUrl}${'/BulkQueryController/getReportExcel'}?QueryId=${id}`, { observe: 'response', responseType: 'blob' as 'json' })
}
public exportSAExcel(id: Number): Observable<any> {    
  return this.http.get<any>(`${environment.apiUrl}${'/BulkQueryController/getReportExcelAditionalService'}?QueryId=${id}`, { observe: 'response', responseType: 'blob' as 'json' })
}
public exportPDF(id: Number): Observable<any> { 
  return this.http.get<any>(`${environment.apiUrl}${'/BulkQueryController/getReport/'}${id}`, { observe: 'response', responseType: 'blob' as 'json' })
}
public exportSAPDF(id: Number): Observable<any> { 
  return this.http.get<any>(`${environment.apiUrl}${'/BulkQueryController/getReportAditionalService/'}${id}`, { observe: 'response', responseType: 'blob' as 'json' })
}

}
