import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsDetailDtoResponseModel } from '../models/newsDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class NewsDetailDtoService {

  apiUrl = "https://localhost:44300/api/News/getnewsbydetails"

  constructor(private httpClient : HttpClient) { }

  getNewsByDetail() : Observable<NewsDetailDtoResponseModel>{
    return this.httpClient.get<NewsDetailDtoResponseModel>(this.apiUrl)
  }
}