import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-manager',
  templateUrl: './news-manager.component.html',
  styleUrls: [],
})
export class NewsManagerComponent implements OnInit {
  categories = [
    { id: 1, name: 'Teknoloji' },
    { id: 2, name: 'Spor' },
    { id: 3, name: 'Ekonomi' },
  ];

  authors = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Editor' },
  ];

  newsList: any[] = [];

  news = {
    id: 0,
    title: '',
    content: '',
    imageUrl: '',
    publishDate: '',
    categoryId: 0,
    authorId: 0,
    isActive: true,
  };

  selectedNews: any = null;
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews().subscribe((response) => {
      this.newsList = response.data;
    });
  }

  onSubmit() {
    if (this.selectedNews) {
      // Güncelleme işlemi
      const index = this.newsList.findIndex(
        (n) => n.id === this.selectedNews.id
      );
      if (index !== -1) {
        this.newsList[index] = { ...this.news };
      }
      this.selectedNews = null;
    } else {
      // Ekleme işlemi
      this.news.id = Date.now(); // Fake id
      this.newsList.push({ ...this.news });
    }

    this.resetForm();
  }

  editNews(item: any) {
    this.selectedNews = item;
    this.news = { ...item };
  }

  deleteNews(item: any) {
    this.newsList = this.newsList.filter((n) => n.id !== item.id);
    if (this.selectedNews && this.selectedNews.id === item.id) {
      this.resetForm();
    }
  }

  cancel() {
    this.selectedNews = null;
  }

  resetForm() {
    this.news = {
      id: 0,
      title: '',
      content: '',
      imageUrl: '',
      publishDate: new Date().toISOString().slice(0, 16),
      categoryId: 0,
      authorId: 0,
      isActive: true,
    };
    this.selectedNews = null;
  }
}
