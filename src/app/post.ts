export class Post {

    title: string;
    content: string;
    loveIts: number;
    created_at: string | Date;

    constructor() {
        this.created_at = new Date();
    }
}
