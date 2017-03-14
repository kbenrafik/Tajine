import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { News } from './News';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News[]

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.news = this.newsService.getNews();
  }

  onMessage(event) {
    console.log(event)
  }
}
