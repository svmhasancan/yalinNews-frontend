import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Category } from 'src/app/models/category';
import { News } from 'src/app/models/news';
import { AuthorService } from 'src/app/services/author.service';
import { CategoryService } from 'src/app/services/category.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-manager',
  templateUrl: './news-manager.component.html',
  styleUrls: ['../../../styles/news-manager.scss'],
})
export class NewsManagerComponent implements OnInit {
  searchText: string = '';
  newsList: News[] = [];
  authors: Author[];
  categories: Category[];
  selectedAuthor = '';
  selectedCategory = '';
  addButtonText = 'Haber Ekle';
  updateButtonText = '';

  newNews: News = {
    id: 0,
    title: '',
    authorId: 0,
    content: '',
    imageUrl: '',
    categoryId: 0,
    isActive: true,
    publishDate: new Date(),
  };

  constructor(
    private authorService: AuthorService,
    private categoryService: CategoryService,
    private newsService: NewsService
  ) {}
  ngOnInit(): void {
    this.getAuthors();
    this.getCategories();
    this.getNews();
  }

  getAuthors() {
    this.authorService.getAuthors().subscribe((response) => {
      this.authors = response.data;
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }

  getNews() {
    this.newsService.getNews().subscribe((response) => {
      this.newsList = response.data;
    });
  }
  filteredNewsList(): News[] {
    return this.newsList.filter((news) =>
      news.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addNews() {
    this.newsService.addNews(this.newNews).subscribe({
      next: () => {
        this.getNews();
        this.resetForm();
      },
      error: (err) => {
        console.error('Haber eklenirken hata oluştu:', err);
      },
    });
  }

  editNews(news: News) {
    this.newNews = { ...news };
  }

  updateNews() {
    this.newsService.updateNews(this.newNews).subscribe({
      next: () => {
        this.getNews();
        this.resetForm();
        console.log('Güncellendi');
      },
      error: () => {
        console.log('Bir Hata Oluştu');
      },
    });
  }

  deleteNews(news: News) {
    confirm('Emin Misiniz');
    if (confirm('Emin Misiniz?')) {
      this.newsService.deleteNews(news).subscribe({
        next: () => {
          this.getNews();
          this.resetForm();
        },
        error: () => {
          console.log('Haber Silinirken Bir Hata Oluştu');
        },
      });
    }
  }

  onSearch() {
    // Arama fonksiyonu şimdilik filtrelemede zaten çalışıyor, burası opsiyonel.
  }

  resetForm() {
    this.newNews = {
      id: 0,
      title: '',
      authorId: 0,
      publishDate: new Date(),
      content: '',
      imageUrl: '',
      categoryId: 0,
      isActive: true,
    };
  }
}
