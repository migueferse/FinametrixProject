import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../services/news.service";
import { New } from "../../models/new";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
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

  archiveNew(neww: New) {
    this.newsService.selectedNew = neww;
    this.newsService.selectedNew.archived = false;
    this.newsService.putNew(neww)
    .subscribe(res => {console.log('Updated Successfuly')})
  }
}
