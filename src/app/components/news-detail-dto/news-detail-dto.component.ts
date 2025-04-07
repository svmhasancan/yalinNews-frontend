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
      const categoryId = params.get('categoryId'); // string olarak gelir

      if (categoryId) {
        this.getNewsByCategory(Number(categoryId)); // Sayısal değere çevir
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

  getNewsByCategory(categoryId: number): void {
    this.newsDetailDtoService
      .getNewsByCategoryId(+categoryId)
      .subscribe((response) => {
        this.newsDetailDto = response.data;
      });
  }

  getCategoryClass(category: string): string {
    switch (category.toLowerCase()) {
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
    if (!category) return '#f8f9fa'; // Varsayılan nötr renk

    const formattedCategory = category.trim().toLowerCase(); // Harf duyarlılığına dikkat!

    const categoryColors: { [key: string]: string } = {
      teknoloji: '#99c2ff', // Daha koyu mavi
      spor: '#a3d9a5', // Daha okunaklı yeşil
      ekonomi: '#ffdb70', // Canlı altın sarısı
      gündem: '#f4a9a3', // Hafif kırmızımsı ton
      bilim: '#b6a1d8', // Orta koyulukta mor
      'kültür & sanat': '#ffb27a', // Daha doygun turuncu
      'sağlık & yaşam': '#8ad3d8', // Canlı turkuaz
    };

    return categoryColors[formattedCategory] || '#f8f9fa'; // Eşleşme yoksa nötr renk uygula
  }
}
