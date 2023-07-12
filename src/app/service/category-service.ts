import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AddCategoryRequest } from '../model/AddCategoryRequest';
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private apiUrl = 'http://localhost:8080/categories'

  constructor(private http:HttpClient) { 
    
  }

  getAllCategories(): Observable<any>{
    return this.http.get<any> (this.apiUrl + "/getAll")
  }
  addCategory(category:AddCategoryRequest){
    return this.http.post<any>(this.apiUrl + "/add", category,{})
  }
}