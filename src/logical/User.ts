// import { Todo } from "./Todo"

export interface UserI {
    user_id : string,
    username : string,
    password : string
}

export class User implements UserI {
    constructor(public user_id: string, public username: string, public password: string) {}

    greet() {
        console.log(`Hello ${this.username}`);
    }
}
