export class Post
{
    constructor
    (
        public id: number,
        public user_id: number,
        public category_id: number,
        public content: string,
        public image: string,
        public createdAt: any,
    ){}
}
