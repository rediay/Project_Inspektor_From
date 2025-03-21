import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { BulkQueryResponseDTO, BulkQueryServicesAdditionalDTO } from '../models/bulkQueryResponseDTO';
@Injectable({
  providedIn: 'root'
})
export class BulkQueryAdditionalService {

constructor(private http: HttpClient) { }
public BulkQuerySA(formData:FormData) :Observable<BulkQueryResponseDTO> {  
  return this.http.post<BulkQueryResponseDTO>(`${environment.apiUrl}/BulkQueryAdditionalServiceController/BulkQueryServicesAdditional`,formData)
}
public getBulkQueryAddiotionalSA(): Observable<BulkQueryServicesAdditionalDTO[]> {
  return this.http.get<BulkQueryServicesAdditionalDTO[]>(`${environment.apiUrl}/BulkQueryAdditionalServiceController/getBulkQueryServicesAdditionalTable`)
}
public exportSAExcel(id: Number): Observable<any> {    
  return this.http.get<any>(`${environment.apiUrl}${'/BulkQueryAdditionalServiceController/getReportExcelAditionalService'}?QueryId=${id}`, { observe: 'response', responseType: 'blob' as 'json' })
}
public exportSAPDF(id: Number): Observable<any> { 
  return this.http.get<any>(`${environment.apiUrl}${'/BulkQueryAdditionalServiceController/getReportAditionalService/'}${id}`, { observe: 'response', responseType: 'blob' as 'json' })
}

}
