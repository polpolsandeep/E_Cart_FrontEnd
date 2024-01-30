import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APPURL, ENDPOINTS, SERVICES } from '../constants/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type':'application/json'
  })
  // getMainCategory():Observable<any>{
  //   return this.http.get(APPURL++,);
  // }
  getCategoryByMainCatId(mainCatId:number):Observable<any>{
    return this.http.get(APPURL+SERVICES.CAT+ENDPOINTS.BY_REF_ID+mainCatId,{headers:this.headers});
  }
  getMethod(service:string,endpoint:string){
    return this.http.get(APPURL+service+endpoint,{headers:this.headers});
  }
  getMethodByRefId(service:string,endpoint:string,refId:number){
    return this.http.get(APPURL+service+endpoint+refId,{headers:this.headers});
  }
}
