import {Component} from '@nestjs/common';

@Component()
export class SecretKey {
    clientID: string;
    clientSecret: string;


    constructor() {
        this.clientID = '749598100296-43vrlaeuikdbgo43r4piadf6cujfso5v.apps.googleusercontent.com';
        this.clientSecret = 'NyrfQE8zpd8P6FEkNVL4pozQ';
    }

    getKeys(): any {
        return {
            clientID: this.clientID,
            clientSecret: this.clientSecret
        };
    }
}