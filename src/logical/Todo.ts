import { User } from "./User"

export interface TodoI {
    id : string,
    title : string,
    description : string,
    user : User
}

export class Todo implements TodoI {
    constructor(
        public id : string,
        public title : string,
        public description : string,
        public user : User){}

        added() {
            console.log(`new todo is created with title : ${this.title}`);
        }
    
}
