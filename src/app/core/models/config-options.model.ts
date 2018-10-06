export class ConfigOptions {
    constructor(public id: string,
        public login: string, 
        public email: string) {
        this.id = id;
        this.login = login;
        this.email = email;
    }
}