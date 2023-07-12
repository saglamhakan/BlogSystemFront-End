import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AddCommentRequest } from '../model/AddCommentRequest';
@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  private apiUrl = 'http://localhost:8080/comments'

  constructor(private http:HttpClient) { 
    
  }

  getAllComments(): Observable<any>{
    return this.http.get<any> (this.apiUrl + "/getAll")
  }
  addComment(comment:AddCommentRequest){
    return this.http.post<any>(this.apiUrl + "/add", comment, {})
  }
  } 
