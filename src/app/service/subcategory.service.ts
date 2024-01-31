import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { ENDPOINTS, SERVICES } from '../constants/http';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private httpService:HttpService) { }

  public getSubCategoriesByCatId(catId:number):Observable<any>{
    return this.httpService.getMethodByRefId(SERVICES.SUB_CAT,ENDPOINTS.BY_REF_ID,catId);
  }
}
