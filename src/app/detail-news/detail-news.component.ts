import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { News } from '../news/News'

@Component({
  selector: 'detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.css']
})
export class DetailNewsComponent implements OnInit{
  title: string
  description: string
  @Input() news: News
  @Output() outputPrice = new EventEmitter;

  ngOnInit() {
    this.outputPrice.emit('You have reauested legules');
    this.title = this.news.title
    this.description = this.news.description
  }
}
