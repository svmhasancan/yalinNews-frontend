import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { NewsDetailDto } from '../models/newsDetailDto';

@Injectable({
  providedIn: 'root',
})
export class NewsDetailDtoService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getNewsByDetail(): Observable<ListResponseModel<NewsDetailDto>> {
    let newUrl = this.apiUrl + '/News/getnewsbydetails';
    return this.httpClient.get<ListResponseModel<NewsDetailDto>>(newUrl);
  }

  getNewsByCategoryId(
    categoryId: string
  ): Observable<ListResponseModel<NewsDetailDto>> {
    let newUrl = this.apiUrl + '/News/getbycategoryid?id=' + categoryId;
    return this.httpClient.get<ListResponseModel<NewsDetailDto>>(newUrl);
  }
}
