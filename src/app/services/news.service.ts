import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiUrl = 'https://localhost:44300/api';

  // https://localhost:44300/api/Categories/getbycategoryid
  // https://localhost:44300/api/News/getbycategoryid?id=8

  constructor(private httpClient: HttpClient) {}

  getNews(): Observable<ListResponseModel<News>> {
    let newUrl = this.apiUrl + '/News/getall';
    return this.httpClient.get<ListResponseModel<News>>(newUrl);
  }

  getNewsByCategoryId(categoryId: number): Observable<ListResponseModel<News>> {
    let newUrl = this.apiUrl + '/News/getbycategoryid?id=' + categoryId;
    return this.httpClient.get<ListResponseModel<News>>(newUrl);
  }

  addNews(news: News) {
    let newUrl = this.apiUrl + '/News/add';
    this.httpClient.post(newUrl, news);
  }
}
