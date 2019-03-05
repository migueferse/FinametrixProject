import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../services/news.service";
import { New } from "../../models/new";

@Component({
  selector: "app-archived",
  templateUrl: "./archived.component.html",
  styleUrls: ["./archived.component.css"]
})
export class ArchivedComponent implements OnInit {
  news: New[] = [];
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews().subscribe(res => {
      this.news = res as New[];
      console.log(res);
    });
  }

  removeNew(neww: New) {
    this.newsService.selectedNew = neww;
    this.newsService.selectedNew.removed = true;
    this.newsService.putNew(neww)
    .subscribe(res => {console.log('Updated Successfuly')})
  }
}
