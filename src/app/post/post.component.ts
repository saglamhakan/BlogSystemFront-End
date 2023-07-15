import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostServiceService } from '../service/post-service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postList: any[] = [];
  userId: number = 0;
  postId: number = 0;
  categoryId: number = 0;
  addPostForm!: FormGroup;


  constructor(
    private postService: PostServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.userId = +params['userId'] || 0;
      this.postId = +params['postId'] || 0;
      this.categoryId = +params['categoryId']|| 0;
      this.loadPosts();
    });
  }

  loadPosts() {
    this.postService.getAllPosts(this.userId, this.postId, this.categoryId).subscribe(data => {
      let response: any = data;
      this.postList = response.getAllPostDto;
    });
  }

  deleteItem(postId: number) {
    this.postService.deletePost(postId).subscribe(data => {
      let response: any = data;
      console.log(response);
      this.loadPosts();
    });
  }

  goToPostDetails(postId: number) {
    this.router.navigate(['/post-detail', postId]);
  }
  onSubmit() {
    if (this.addPostForm.invalid) {
      return;
    }
  }
}