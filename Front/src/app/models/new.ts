export class New {

    constructor(_id = '', title = '', description = '', date = new Date(), content = '',
     author = '', archiveDate = new Date(), archived = false, removed = false) {
         this._id = _id;
         this.title = title;
         this.description = description;
         this.date = date;
         this.content = content;
         this.author = author;
         this.archiveDate = archiveDate;
         this.archived = archived;
         this.removed = removed;
     }
    _id: string;
    title: string;
    description: string;
    date: Date;
    content: string;
    author: string;
    archiveDate: Date;
    archived: boolean;
    removed: boolean;

}