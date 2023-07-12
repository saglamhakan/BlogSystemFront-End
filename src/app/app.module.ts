import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: UserComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CategoryComponent,
    PostComponent,
    AddUserComponent,
    AddPostComponent,
    AddCategoryComponent,
    CommentComponent,
    AddCommentComponent,
    HomePageComponent,
    UpdateUserComponent,
    UpdateCategoryComponent,
    UpdatePostComponent,
    UpdateCommentComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
