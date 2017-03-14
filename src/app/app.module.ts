import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';


import { TajineService } from './tajine.service';
import { NewsService } from './news/news.service';

import { NewsComponent } from './news/news.component';
import { LegumesComponent } from './legumes/legumes.component';
import { DetailNewsComponent } from './detail-news/detail-news.component';

import { ChangeColorDirective } from './directives/color.directive';

import { FormatPrice } from './directives/pipes/price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    NewsComponent,
    LegumesComponent,
    DetailNewsComponent,
    ChangeColorDirective,
    FormatPrice
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'legumes',
        component: LegumesComponent
      }
    ])
  ],
  providers: [TajineService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
