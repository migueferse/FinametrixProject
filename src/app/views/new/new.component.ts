import { Component, OnInit } from '@angular/core';
import { NewsService, New } from '../../services/news.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  news: New[] = [];
  constructor( private _newsService: NewsService) {
    
   }

  ngOnInit() {
  this.news = this._newsService.getNews();
  console.log( this.news);
  }

}
