import { Injectable } from '@angular/core';
import { News } from './News';

@Injectable()
export class NewsService {
  news: News[] = [
   new News("lorem A", "impsum dollar"),
   new News("Title 2", "description impsum dollar")
  ]
  
  constructor() { }

  getNews(): News[] {
    return this.news
  }
}
