import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../service/post-service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  postId: number=0;
  post: any;
  user: any;
  category: any;
  comments: any[] = []; // comments değişkenini dizi olarak tanımla

  constructor(
    private route: ActivatedRoute,
    private postService: PostServiceService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postId = Number(params.get('postId'));
      this.loadPostDetails();
    });
  }
  
  loadPostDetails() {
    this.postService.getById(this.postId).subscribe(data => {
      let response: any = data;
      this.post = response.post;
      this.user = response.user;
      this.category = response.category;
      this.comments = response.comments;
    }, error => {
      console.log(error); // Hata durumunda hatayı konsola yazdırabilirsiniz
    });
  }
  
}
