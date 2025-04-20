import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailDtoComponent } from './components/news-detail-dto/news-detail-dto.component';
import { NewsManagerComponent } from './components/news-manager/news-manager.component';

// localhost:4200
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'news' },
  { path: 'news', component: NewsDetailDtoComponent },
  { path: 'news/category/0', redirectTo: 'news', pathMatch: 'full' },
  { path: 'news/category/:categoryId', component: NewsDetailDtoComponent },
  { path: 'news/news-manager', component: NewsManagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
