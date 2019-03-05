export class New {

    constructor(_id = '', title = '', description = '', date = '', content = '',
     author = '', archiveDate = '', archived = false, removed = false) {
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
    date: string;
    content: string;
    author: string;
    archiveDate: string;
    archived: boolean;
    removed: boolean;

}