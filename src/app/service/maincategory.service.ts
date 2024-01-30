import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { ENDPOINTS, SERVICES } from '../constants/http';


@Injectable({
  providedIn: 'root'
})
export class MaincategoryService {

  constructor(private httpService:HttpService) { }

  getMainCategory():Observable<any>{
    return this.httpService.getMethod(SERVICES.MAIN_CAT,ENDPOINTS.ALL);
  }
  
 
}
