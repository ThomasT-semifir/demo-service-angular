export class User {
    id?: string;
    name: string;
    mail: string;

    /**
     *
     */
    constructor(name: string, mail: string) {
        this.name = name;
        this.mail = mail;
    }
}