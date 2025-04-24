import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisualCategory } from 'src/app/models/visualCategory';
import { CategoryVisualService } from 'src/app/services/category-visual.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['../../../../src/styles/category.scss'],
})
export class CategoryComponent implements OnInit {
  categories: VisualCategory[];
  constructor(
    private categoryVisualService: CategoryVisualService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategoryVisual();
  }

  getCategoryVisual() {
    this.categoryVisualService.enrichCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  navigateToCategory(categoryId: number) {
    this.router.navigate(['news/category/', categoryId]);
  }
}
