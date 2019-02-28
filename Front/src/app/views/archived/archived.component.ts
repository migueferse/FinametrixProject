import { Component, OnInit } from "@angular/core";
import { NewsService, New } from "../../services/news.service";

@Component({
  selector: "app-archived",
  templateUrl: "./archived.component.html",
  styleUrls: ["./archived.component.css"]
})
export class ArchivedComponent implements OnInit {
  news: New[] = [];
  constructor(private _newsService: NewsService) {}

  ngOnInit() {
    this.news = this._newsService.getNews();
    console.log(this.news);
  }
}
