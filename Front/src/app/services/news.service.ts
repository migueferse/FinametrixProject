import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { New } from '../models/new';

@Injectable({
  providedIn: "root"
})
export class NewsService {
  // private news: New[] = [
  //   {
  //     _id: 1,
  //     title: "New 1",
  //     description: "Description new 1",
  //     date: "2019-02-27",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipiscing elit litora pulvinar integer malesuada, ornare pharetra class magnis blandit odio quam imperdiet sociosqu etiam, netus erat facilisi praesent non eget fusce eleifend sem lacinia. Leo quam luctus litora dictumst eu aenean malesuada donec cum sodales, fringilla lacinia ornare ultricies potenti odio dignissim eget accumsan, per ligula id purus etiam fusce feugiat penatibus eleifend",
  //     author: "Migue",
  //     archiveDate: "2019-02-27",
  //     archived: true
  //   },
  //   {
  //     _id: 2,
  //     title: "New 2",
  //     description: "Description new 2",
  //     date: "2019-02-27",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipiscing elit litora pulvinar integer malesuada, ornare pharetra class magnis blandit odio quam imperdiet sociosqu etiam, netus erat facilisi praesent non eget fusce eleifend sem lacinia. Leo quam luctus litora dictumst eu aenean malesuada donec cum sodales, fringilla lacinia ornare ultricies potenti odio dignissim eget accumsan, per ligula id purus etiam fusce feugiat penatibus eleifend",
  //     author: "Migue",
  //     archiveDate: "2019-02-27",
  //     archived: false
  //   },
  //   {
  //     _id: 3,
  //     title: "New 3",
  //     description: "Description new 3",
  //     date: "2019-02-27",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipiscing elit litora pulvinar integer malesuada, ornare pharetra class magnis blandit odio quam imperdiet sociosqu etiam, netus erat facilisi praesent non eget fusce eleifend sem lacinia. Leo quam luctus litora dictumst eu aenean malesuada donec cum sodales, fringilla lacinia ornare ultricies potenti odio dignissim eget accumsan, per ligula id purus etiam fusce feugiat penatibus eleifend",
  //     author: "Jose",
  //     archiveDate: "2019-02-27",
  //     archived: true
  //   },
  //   {
  //     _id: 4,
  //     title: "New 4",
  //     description: "Description new 4",
  //     date: "2019-02-27",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipiscing elit litora pulvinar integer malesuada, ornare pharetra class magnis blandit odio quam imperdiet sociosqu etiam, netus erat facilisi praesent non eget fusce eleifend sem lacinia. Leo quam luctus litora dictumst eu aenean malesuada donec cum sodales, fringilla lacinia ornare ultricies potenti odio dignissim eget accumsan, per ligula id purus etiam fusce feugiat penatibus eleifend",
  //     author: "Jose",
  //     archiveDate: "2019-02-27",
  //     archived: true
  //   },
  //   {
  //     _id: 5,
  //     title: "New 5",
  //     description: "Description new 5",
  //     date: "2019-02-27",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipiscing elit litora pulvinar integer malesuada, ornare pharetra class magnis blandit odio quam imperdiet sociosqu etiam, netus erat facilisi praesent non eget fusce eleifend sem lacinia. Leo quam luctus litora dictumst eu aenean malesuada donec cum sodales, fringilla lacinia ornare ultricies potenti odio dignissim eget accumsan, per ligula id purus etiam fusce feugiat penatibus eleifend",
  //     author: "Migue",
  //     archiveDate: "2019-02-27",
  //     archived: true
  //   }
  // ];

  selectedNew: New;
  // public news: New[];
  readonly URL_API = 'http://localhost:3000/api/news';

  constructor(private http:HttpClient) {
    console.log("Service Ready to use");
    this.selectedNew = new New();
  }

  getNews() {
    return this.http.get(this.URL_API)
  }

  putNew(neww: New){
    return this.http.put(this.URL_API + `/${neww._id}`, neww);
  }
}

// export interface New {
//   _id: number;
//   title: string;
//   description: string;
//   date: string;
//   content: string
//   author: string;
//   archiveDate: string;
//   archived: boolean
// }
