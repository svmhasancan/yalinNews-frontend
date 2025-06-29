import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  apiUrl = environment.apiUrl + '/Authors';
  constructor(private httpClient: HttpClient) {}

  getAuthors(): Observable<ListResponseModel<Author>> {
    let newUrl = this.apiUrl + '/getall';
    return this.httpClient.get<ListResponseModel<Author>>(newUrl);
  }
}
