import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { NewsDetailDto } from '../models/newsDetailDto';


@Injectable({
  providedIn: 'root'
})
export class NewsDetailDtoService {

  apiUrl = "https://localhost:44300/api"

  constructor(private httpClient : HttpClient) { }

  getNewsByDetail() : Observable<ListResponseModel<NewsDetailDto>>{
    let newUrl = this.apiUrl + "/News/getnewsbydetails";
    return this.httpClient.get<ListResponseModel<NewsDetailDto>>(newUrl)
  }

  getNewsByCategoryId(categoryId : number): Observable<ListResponseModel<NewsDetailDto>> {
      let newUrl = this.apiUrl + "/News/getbycategoryid?id=" + categoryId
      return this.httpClient.get<ListResponseModel<NewsDetailDto>>(newUrl);
    }
}