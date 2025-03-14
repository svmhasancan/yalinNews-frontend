import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory : Category = {id:0,name:'Tüm Kategoriler'};
  constructor(private categoryService: CategoryService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }

  setCurrentCategory(category:Category) : void {
    this.currentCategory = category;

    
  }

  getCurrentCategoryName(categoryName:string) {
    if(categoryName == this.currentCategory.name){
      return "list-group-item active list-group-item-action category-item"
    }else{
      return "list-group-item list-group-item-action category-item"
    };
    
  };
}
