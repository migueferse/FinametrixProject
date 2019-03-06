import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../services/news.service";
import { New } from "../../models/new";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html"
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
      this.news.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        return 0;
      });
    });
  }

  archiveNew(neww: New) {
    this.newsService.selectedNew = neww;
    this.newsService.selectedNew.archived = true;
    this.newsService.putNew(neww).subscribe(res => {
      console.log("Updated Successfuly");
    });
  }
}
