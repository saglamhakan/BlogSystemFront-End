import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AddPostRequest } from '../model/AddPostRequest';
import { UpdatePostRequest } from '../model/UpdatePostRequest';
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

  getById(postId:number): Observable<any>{
    const url = `${this.apiUrl}/getById/${postId}`;
    return this.http.get<any>(url);
  }

  addPost(post:AddPostRequest){
    return this.http.post<any> (this.apiUrl + "/add", post,{})
  } 
  updatePost(post:UpdatePostRequest){
    return this.http.put<any> (this.apiUrl + "/update", post, {})
  }
  deletePost(postId:number){
    const url = `${this.apiUrl}/delete/${postId}`;
    return this.http.delete<any> (url)
  }
}