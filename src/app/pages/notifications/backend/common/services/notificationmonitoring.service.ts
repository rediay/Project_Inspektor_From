import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { PaginationFilter } from '../../../../../utils/pagination-filter';

@Injectable({
  providedIn: 'root'
})
export class NotificationmonitoringService {
  
constructor(private HttpClient : HttpClient) {}

public getAll(filter: PaginationFilter): Observable<any> {

  const urlSearchParams = Object.entries(filter).map(([key, val]) => `${key}=${val}`).join('&');
  return this.HttpClient.get<any>(`${environment.apiUrl}${'/notifications/monitoring/GetAll'}?${urlSearchParams}`)
}
public exportExcel(filter: PaginationFilter): Observable<any> {

  const urlSearchParams = Object.entries(filter).map(([key, val]) => `${key}=${val}`).join('&');  
  return this.HttpClient.get<any>(`${environment.apiUrl}${'/notifications/monitoring/ExportExcel'}?${urlSearchParams}`, { observe: 'response', responseType: 'blob' as 'json' })
}

}
