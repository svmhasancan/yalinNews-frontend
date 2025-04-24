import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsDetailDto } from 'src/app/models/newsDetailDto';
import { CategoryVisualService } from 'src/app/services/category-visual.service';
import { NewsDetailDtoService } from 'src/app/services/news-detail-dto.service';

@Component({
  selector: 'app-news-detail-dto',
  templateUrl: './news-detail-dto.component.html',
  styleUrls: ['../../../../src/styles/news.scss'],
})
export class NewsDetailDtoComponent implements OnInit {
  newsDetailDto: NewsDetailDto[] = [];
  filterText: string = '';
  categoryColors: { [key: string]: string } = {};

  constructor(
    private newsDetailDtoService: NewsDetailDtoService,
    private categoryVisualService: CategoryVisualService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const categoryId = params.get('categoryId');
      if (categoryId) {
        console.log('Çalıştı');
        this.getNewsByCategory(categoryId);
      } else {
        this.getNewsByDetail();
      }
    });
    this.getCategoryVisuals();
  }

  getCategoryVisuals() {
    this.categoryVisualService.getCategoryVisuals().subscribe((categories) => {
      categories.forEach((category) => {
        this.categoryColors[category.name] = category.color;
      });
    });
  }

  getNewsByDetail(): void {
    this.newsDetailDtoService.getNewsByDetail().subscribe((response) => {
      this.newsDetailDto = response.data.map((news) => ({
        ...news,
        showReplies: false,
        replies: [],
        newReply: '',
      }));
    });
  }

  getPublishDate(publishDate: string): string {
    const date = new Date(publishDate);
    return date.toLocaleDateString();
  }

  getNewsByCategory(categoryId: string): void {
    this.newsDetailDtoService
      .getNewsByCategoryId(categoryId)
      .subscribe((response) => {
        this.newsDetailDto = response.data;
      });
  }

  getTextColor(category: string): string {
    const lightBackgrounds = ['#ffdb70', '#ffe5d0', '#fff3cd', '#d1ecf1'];
    const color = this.categoryColors[category] || '#444';
    return lightBackgrounds.includes(color) ? '#000' : '#fff';
  }
}
