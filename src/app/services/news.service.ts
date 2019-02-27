import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  private news: New[] = [
    {
      title: "New 1",
      description: "Description new 1",
      date: "2019-02-27",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit litora pulvinar integer malesuada, ornare pharetra class magnis blandit odio quam imperdiet sociosqu etiam, netus erat facilisi praesent non eget fusce eleifend sem lacinia. Leo quam luctus litora dictumst eu aenean malesuada donec cum sodales, fringilla lacinia ornare ultricies potenti odio dignissim eget accumsan, per ligula id purus etiam fusce feugiat penatibus eleifend",
      author: "Migue",
      archiveDate: "2019-02-27"
    },
    {
      title: "New 2",
      description: "Description new 2",
      date: "2019-02-27",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit litora pulvinar integer malesuada, ornare pharetra class magnis blandit odio quam imperdiet sociosqu etiam, netus erat facilisi praesent non eget fusce eleifend sem lacinia. Leo quam luctus litora dictumst eu aenean malesuada donec cum sodales, fringilla lacinia ornare ultricies potenti odio dignissim eget accumsan, per ligula id purus etiam fusce feugiat penatibus eleifend",
      author: "Migue",
      archiveDate: "2019-02-27"
    },
    {
      title: "New 3",
      description: "Description new 3",
      date: "2019-02-27",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit litora pulvinar integer malesuada, ornare pharetra class magnis blandit odio quam imperdiet sociosqu etiam, netus erat facilisi praesent non eget fusce eleifend sem lacinia. Leo quam luctus litora dictumst eu aenean malesuada donec cum sodales, fringilla lacinia ornare ultricies potenti odio dignissim eget accumsan, per ligula id purus etiam fusce feugiat penatibus eleifend",
      author: "Jose",
      archiveDate: "2019-02-27"
    },
    {
      title: "New 4",
      description: "Description new 4",
      date: "2019-02-27",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit litora pulvinar integer malesuada, ornare pharetra class magnis blandit odio quam imperdiet sociosqu etiam, netus erat facilisi praesent non eget fusce eleifend sem lacinia. Leo quam luctus litora dictumst eu aenean malesuada donec cum sodales, fringilla lacinia ornare ultricies potenti odio dignissim eget accumsan, per ligula id purus etiam fusce feugiat penatibus eleifend",
      author: "Jose",
      archiveDate: "2019-02-27"
    },
    {
      title: "New 5",
      description: "Description new 5",
      date: "2019-02-27",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit litora pulvinar integer malesuada, ornare pharetra class magnis blandit odio quam imperdiet sociosqu etiam, netus erat facilisi praesent non eget fusce eleifend sem lacinia. Leo quam luctus litora dictumst eu aenean malesuada donec cum sodales, fringilla lacinia ornare ultricies potenti odio dignissim eget accumsan, per ligula id purus etiam fusce feugiat penatibus eleifend",
      author: "Migue",
      archiveDate: "2019-02-27"
    }
  ];

  constructor() {
    console.log("Service Ready to use");
  }

  getNews() {
    return this.news;
  }
}

export interface New {
  title: string;
  description: string;
  date: string;
  content: string
  author: string;
  archiveDate: string;
}
