import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AddPostRequest } from '../model/AddPostRequest';
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private apiUrl = 'http://localhost:8080/posts'

  constructor(private http:HttpClient) { 
    
  }

  getAllPosts(): Observable<any>{
    return this.http.get<any> (this.apiUrl + "/getAll")
  }
  addPost(post:AddPostRequest){
    return this.http.post<any> (this.apiUrl + "/add", post,{})
  } 
}