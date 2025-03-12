import { Component, OnInit } from '@angular/core';
import { NewsDetailDto } from 'src/app/models/newsDetailDto';
import { NewsDetailDtoService } from 'src/app/services/news-detail-dto.service';

@Component({
  selector: 'app-news-detail-dto',
  templateUrl: './news-detail-dto.component.html',
  styleUrls: ['./news-detail-dto.component.css']
})
export class NewsDetailDtoComponent implements OnInit {

  newsDetailDto : NewsDetailDto[] = [];

  constructor(private newsDetailDtoService : NewsDetailDtoService) { }

  ngOnInit(): void {
    this.getNewsByDetail();
  }

  getNewsByDetail() : void {
    this.newsDetailDtoService.getNewsByDetail().subscribe((response) => {
      this.newsDetailDto = response.data;
    });
  }
}