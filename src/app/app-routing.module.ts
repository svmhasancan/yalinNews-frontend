import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailDtoComponent } from './components/news-detail-dto/news-detail-dto.component';
import { NewsManagerComponent } from './components/news-manager/news-manager.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'news' },
  { path: 'news', component: HomeComponent },
  { path: 'news/category/0', redirectTo: 'news', pathMatch: 'full' },
  { path: 'news/category/:categoryId', component: HomeComponent },
  { path: 'news/news-manager', component: NewsManagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
