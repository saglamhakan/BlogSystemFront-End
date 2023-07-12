import { Component} from '@angular/core';
import { CommentServiceService } from '../service/comment-service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  commentList: any[]=[]
  constructor(
    private commentService: CommentServiceService
  ){

  }
  ngOnInit(){
    this.loadCommments()
  }
  
  loadCommments(){
    this.commentService.getAllComments().subscribe(data=>{
      let response:any = data
      this.commentList=response.getAllCommentDto
      console.log(response)
    
    })
  }
}
