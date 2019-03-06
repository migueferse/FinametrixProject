import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { New } from "../models/new";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  selectedNew: New;
  readonly URL_API = "http://localhost:3000/api/news";

  constructor(private http: HttpClient) {
    console.log("Service Ready to use");
    this.selectedNew = new New();
  }

  getNews() {
    return this.http.get(this.URL_API);
  }

  putNew(neww: New) {
    return this.http.put(this.URL_API + `/${neww._id}`, neww);
  }
}
