import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsDetailDto } from 'src/app/models/newsDetailDto';
import { NewsDetailDtoService } from 'src/app/services/news-detail-dto.service';

@Component({
  selector: 'app-news-detail-dto',
  templateUrl: './news-detail-dto.component.html',
  styleUrls: ['./news-detail-dto.component.css'],
})
export class NewsDetailDtoComponent implements OnInit {
  newsDetailDto: NewsDetailDto[] = [];
  filterText: string = '';

  categoryColors: { [key: string]: string } = {
    Teknoloji: '#cce5ff',
    Spor: '#d4edda',
    Ekonomi: '#fff3cd',
    Gündem: '#f8d7da',
    Bilim: '#e2d9f3',
    'Kültür & Sanat': '#ffe5d0',
    'Sağlık & Yaşam': '#d1ecf1',
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
      this.newsDetailDto = response.data;
    });
  }

  getPublishDate(publishDate: string): string {
    const date = new Date(publishDate);
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
  }

  getNewsByCategory(categoryId: string): void {
    this.newsDetailDtoService
      .getNewsByCategoryId(categoryId)
      .subscribe((response) => {
        console.log('Kategori Sayfası Gelen Data:', response.data);
        this.newsDetailDto = response.data;
      });
  }

  getCategoryClass(category: string): string {
    if (!category) return '';
    const formattedCategory = category.trim().toLowerCase();

    switch (formattedCategory) {
      case 'teknoloji':
        return 'technology-bg';
      case 'spor':
        return 'sports-bg';
      case 'ekonomi':
        return 'economy-bg';
      case 'gündem':
        return 'politics-bg';
      case 'bilim':
        return 'science-bg';
      case 'kültür & sanat':
        return 'art-bg';
      case 'sağlık & yaşam':
        return 'health-bg';
      case 'dünya':
        return 'world-bg';
      case 'e-spor & oyun':
        return 'esports-bg';
      default:
        return '';
    }
  }

  getBackgroundColor(category: string): string {
    if (!category) return '#f8f9fa';

    const formattedCategory = category.trim().toLowerCase();

    const categoryColors: { [key: string]: string } = {
      teknoloji: '#99c2ff',
      spor: '#a3d9a5',
      ekonomi: '#ffdb70',
      gündem: '#f4a9a3',
      bilim: '#b6a1d8',
      'kültür & sanat': '#ffb27a',
      'sağlık & yaşam': '#8ad3d8',
    };

    return categoryColors[formattedCategory] || '#f8f9fa';
  }
}
