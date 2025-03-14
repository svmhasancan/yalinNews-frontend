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

  constructor(
    private newsDetailDtoService: NewsDetailDtoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const categoryId = params.get('categoryId');  // string olarak gelir
  
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
}
