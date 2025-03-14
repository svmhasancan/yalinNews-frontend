import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailDtoComponent } from './components/news-detail-dto/news-detail-dto.component';

// localhost:4200
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'news' }, // Ana sayfa news'e yönlensin
  { path: 'news', component: NewsDetailDtoComponent },
  { path: 'news/category/0', redirectTo: 'news', pathMatch: 'full' }, // ID 0 ise /news'e yönlendir
  { path: 'news/category/:categoryId', component: NewsDetailDtoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
