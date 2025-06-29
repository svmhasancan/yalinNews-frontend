import { environment } from 'src/environments/environment.prod';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  // apiUrl = "https://localhost:44300/api/Categories/getall";

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<ListResponseModel<Category>> {
    let newUrl = this.apiUrl + '/Categories/getall';
    return this.httpClient.get<ListResponseModel<Category>>(newUrl);
  }
}
