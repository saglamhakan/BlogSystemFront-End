import { Component } from '@angular/core';
import { CategoryServiceService } from '../service/category-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categoryList: any[]=[]
  constructor(
    private categoryService: CategoryServiceService, private router: Router
  ){

  }
  ngOnInit(){
    this.loadCategories()
  }
  loadCategories(){
    this.categoryService.getAllCategories().subscribe(data=>{
      let response:any = data
      this.categoryList=response.getAllCategoryDto
      console.log(response)
    })
  }
  deleteItem(categoryId: number) {
    this.categoryService.deleteCategory(categoryId).subscribe(data => {
      let response: any = data;
      console.log(response);
    });

  }
}