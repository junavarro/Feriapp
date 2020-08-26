export class User {
    name: string;
    id: number;
    phone: number;
    location: string;
    email: string;
    password: string;
    whatsapp: number;
    telegram: number;
    sinpe: number;
    
    constructor (name: string,id: number,phone: number,location: string,email: string,password: string,whatsapp: number,telegram: number,sinpe: number) {
        this.name = name;
        this.id = id;
        this.phone = phone;
        this.location = location;
        this.email = email;
        this.password = password;
        this.whatsapp = whatsapp;
        this.telegram = telegram;
        this.sinpe = sinpe;
    }
}
