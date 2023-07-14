import { Component} from '@angular/core';
import { CommentServiceService } from '../service/comment-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  commentList: any[]=[]
  constructor(
    private commentService: CommentServiceService, private router: Router
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
  deleteItem(commentId: number) {
    this.commentService.deleteComment(commentId).subscribe(data => {
      let response: any = data;
      console.log(response);
      // Gönderiyi silme işleminden sonra gönderi listesini yeniden yüklemek için sayfayı yeniden yönlendirin
      this.router.navigateByUrl('/list-comment');
    });
  }
}
