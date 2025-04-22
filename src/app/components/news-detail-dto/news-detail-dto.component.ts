import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsDetailDto } from 'src/app/models/newsDetailDto';
import { CategoryColorService } from 'src/app/services/category-color.service';
import { NewsDetailDtoService } from 'src/app/services/news-detail-dto.service';

@Component({
  selector: 'app-news-detail-dto',
  templateUrl: './news-detail-dto.component.html',
  styleUrls: ['../../../../src/styles/news.scss'],
})
export class NewsDetailDtoComponent implements OnInit {
  newsDetailDto: NewsDetailDto[] = [];
  filterText: string = '';

  categoryColors: { [key: string]: string } = {
    Teknoloji: '#4ea8de',
    Spor: '#38b000',
    Ekonomi: '#f4a261',
    Gündem: '#e63946',
    Bilim: '#9d4edd',
    'Kültür & Sanat': '#f9844a',
    'Sağlık & Yaşam': '#00b4d8',
    Dünya: '#6a994e',
    'E-spor & Oyun': '#5f0f40',
  };

  constructor(
    private newsDetailDtoService: NewsDetailDtoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const categoryId = params.get('categoryId');
      if (categoryId) {
        this.getNewsByCategory(categoryId);
      } else {
        this.getNewsByDetail();
      }
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
