import { Component, OnInit } from '@angular/core';
import { NewsDetailDto } from 'src/app/models/newsDetailDto';
import { NewsDetailDtoService } from 'src/app/services/news-detail-dto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../../src/styles/home.scss'],
})
export class HomeComponent implements OnInit {
  lastNews: NewsDetailDto[] = [];

  constructor(private newsDetailDtoService: NewsDetailDtoService) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsDetailDtoService.getNewsByDetail().subscribe((response) => {
      this.lastNews = response.data;
    });
  }
}
