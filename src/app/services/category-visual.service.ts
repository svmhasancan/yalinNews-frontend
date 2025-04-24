import { Injectable } from '@angular/core';
import { CategoryService } from './category.service';
import { VisualCategory } from '../models/visualCategory';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryVisualService {
  private visualDataUrl = 'assets/category-visuals.json';

  constructor(
    private categoryService: CategoryService,
    private httpClient: HttpClient
  ) {}

  enrichCategories(): Observable<VisualCategory[]> {
    return forkJoin({
      categories: this.categoryService.getCategories(),
      visuals: this.httpClient.get<{ categories: any[] }>(this.visualDataUrl),
    }).pipe(
      map(({ categories, visuals }) => {
        const visualsArray = visuals.categories;
        return categories.data.map((category: Category) => {
          const match = visualsArray.find(
            (v) =>
              v.name.trim().toLowerCase() === category.name.trim().toLowerCase()
          );
          return {
            id: category.id,
            name: category.name,
            color: match?.color || '#444',
            icon: match?.icon || 'fa-question',
          } as VisualCategory;
        });
      })
    );
  }

  getCategoryVisuals(): Observable<VisualCategory[]> {
    return this.httpClient
      .get<{ categories: VisualCategory[] }>(this.visualDataUrl)
      .pipe(map((response) => response.categories));
  }
}
