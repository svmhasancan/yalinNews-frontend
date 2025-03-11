import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsResponseModel } from '../models/newsResponseModel';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiUrl = 'https://localhost:44300/api/News/getall';

  constructor(private httpClient: HttpClient) {}

  getNews(): Observable<NewsResponseModel> {
    return this.httpClient.get<NewsResponseModel>(this.apiUrl);
  }
}
