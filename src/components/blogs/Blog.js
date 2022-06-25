import { v4 as uuid } from 'uuid';

export class Blog {
    constructor(blog, dueDate) {
        this.blog = blog;
        this.dueDate = dueDate;
        this.createdAt = new Date().toISOString();
        this.isCompleted = false;
        this.id = uuid();
    }
}