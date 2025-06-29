import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiUrl = environment.apiUrl;

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

  addNews(news: News): Observable<any> {
    let newUrl = this.apiUrl + '/News/add';
    return this.httpClient.post(newUrl, news);
  }

  updateNews(news: News): Observable<any> {
    let newUrl = this.apiUrl + '/News/update';
    return this.httpClient.put(newUrl, news);
  }

  deleteNews(news: News): Observable<any> {
    let newUrl = this.apiUrl + '/News/delete';
    return this.httpClient.delete(newUrl, { body: news });
  }
}
