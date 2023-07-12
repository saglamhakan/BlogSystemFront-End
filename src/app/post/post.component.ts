import { Component } from '@angular/core';
import { PostServiceService } from '../service/post-service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  postList: any[]=[]
  constructor(
    private postService: PostServiceService
  ){

  }
  ngOnInit(){
    this.loadPosts()
  }
  loadPosts(){
    this.postService.getAllPosts().subscribe(data=>{
      let response:any = data
      this.postList=response.getAllPostDto
      console.log(response) })
  
  }

}
