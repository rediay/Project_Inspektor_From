import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { AccessRolDTO } from '../../../models/RoleUserDTO';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

constructor(private http: HttpClient) { }

public getByCompany(){
  return this.http.get<any>(`${environment.apiUrl}/AccessController/GetByCompany`)
}

public getPermissionsByAccessId(id:string){
  let httpParams = new HttpParams()
  .append("AccessId", id)
  return this.http.get<any>(`${environment.apiUrl}/AccessController/GetPermissionsByAccessId`,{params : httpParams})
}

public createNameAccess(_nameacces:any){
  return this.http.post<any>(`${environment.apiUrl}/AccessController/Create`,_nameacces)
}

public DeleteNameAccess(_idacces:string){

  let httpParams = new HttpParams()
  .append("id", _idacces)
  return this.http.post<string>(`${environment.apiUrl}/AccessController/Delete`,null,{params : httpParams})

}

public createAccessByCompany(_accessrol:AccessRolDTO){
  return this.http.post<AccessRolDTO>(`${environment.apiUrl}/AccessController/CreateAccessJson`,_accessrol)
}

public updateAccess(_accessrol:AccessRolDTO){
  return this.http.post<AccessRolDTO>(`${environment.apiUrl}/AccessController/UpdateAccess`,_accessrol)
}


}
