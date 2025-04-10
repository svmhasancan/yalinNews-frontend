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
  currentCategory: Category = { id: 0, name: 'Tüm Kategoriler' };

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }

  setCurrentCategory(category: Category): void {
    this.currentCategory = category;
    this.router.navigate(['news', 'category', this.currentCategory.id]);
  }

  getCategoryColor(category: string): string {
    const categoryColors: { [key: string]: string } = {
      teknoloji: '#4ea8de',
      spor: '#38b000',
      ekonomi: '#f4a261',
      gündem: '#e63946',
      bilim: '#9d4edd',
      'kültür & sanat': '#f9844a',
      'sağlık & yaşam': '#00b4d8',
      dünya: '#6a994e',
      'e-spor & oyun': '#5f0f40',
    };

    return categoryColors[category.trim().toLowerCase()] || '#444';
  }

  getCurrentCategoryName(category: string): string {
    return category === this.currentCategory.name
      ? 'list-group-item active list-group-item-action category-item'
      : 'list-group-item list-group-item-action category-item';
  }
}
