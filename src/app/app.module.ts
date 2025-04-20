import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { NewsComponent } from './components/news/news.component';
import { CategoryComponent } from './components/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsDetailDtoComponent } from './components/news-detail-dto/news-detail-dto.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { NewsManagerComponent } from './components/news-manager/news-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    NewsComponent,
    CategoryComponent,
    NewsDetailDtoComponent,
    FooterComponent,
    FilterPipe,
    NewsManagerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
