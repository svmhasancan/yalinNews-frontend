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

  constructor(private categoryService: CategoryService, private router: Router) {}

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
  }

  getCategoryColor(category: string): string {
    const categoryColors: { [key: string]: string } = {
      'teknoloji': '#0056b3', // Koyu mavi
      'spor': '#1e7e34', // Koyu yeşil
      'ekonomi': '#b37e00', // Koyu altın sarısı
      'gündem': '#a71d2a', // Koyu kırmızı
      'bilim': '#4a148c', // Koyu mor
      'kültür & sanat': '#b45309', // Koyu turuncu
      'sağlık & yaşam': '#0e637a' // Koyu turkuaz
    };

    return categoryColors[category.trim().toLowerCase()] || '#444'; // Varsayılan koyu gri
  }

  getCurrentCategoryName(category: string): string {
    return category === this.currentCategory.name
      ? "list-group-item active list-group-item-action category-item"
      : "list-group-item list-group-item-action category-item";
  }
}
