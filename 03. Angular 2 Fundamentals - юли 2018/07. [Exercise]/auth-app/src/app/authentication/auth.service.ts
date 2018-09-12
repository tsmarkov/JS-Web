import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const APP_KEY = 'kid_r1vOaCVcG';
const APP_SECRET = '8a489cf02cac42e58c403a2bd3553af5';
const BASE_URL = 'https://baas.kinvey.com';
const USER_URL = 'user';
// const REGISTER_URL = `${BASE_URL}/${USER_URL}/${APP_KEY}`;
const REGISTER_URL = 'https://localhost:44365/account/register';
// const LOGIN_URL = `${BASE_URL}/${USER_URL}/${APP_KEY}/login`;
const LOGIN_URL = `https://localhost:44365/account/login`;
const LOGOUT_URL = `${BASE_URL}/${USER_URL}/${APP_KEY}/_logout`;

@Injectable()
export class AuthService {
    private currentAuthToken: string;
    private currentUsername: string;

    constructor(private http: HttpClient) { }

    get authToken() {
        return this.currentAuthToken;
    }

    set authToken(value: string) {
        this.currentAuthToken = value;
    }

    get username() {
        return this.currentUsername;
    }

    set username(value: string) {
        this.currentUsername = value;
    }

    isLoged() {
        return this.currentAuthToken === sessionStorage.getItem('authtoken');
    }

    login(model) {
        return this.http.post(
            LOGIN_URL,
            JSON.stringify(model),
            { headers: this.createAuthHeaders('Basic') }
        );
    }

    register(model) {
console.log(model);


        return this.http.post(
            REGISTER_URL,
            JSON.stringify(model),
            { headers: this.createAuthHeaders('Basic') }
        );
    }

    logout() {
        return this.http.post(
            LOGOUT_URL,
            {},
            { headers: this.createAuthHeaders('Kinvey') }
        );
    }

    private createAuthHeaders(type: string) {
        if (type === 'Basic') {
            return new HttpHeaders({
                'Access-Control-Allow-Origin':'*',
                'Authorization': `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
                'Content-Type': 'application/json'
            })
        } else if (type === 'Kinvey') {
            return new HttpHeaders({
                'Access-Control-Allow-Origin':'*',
                'Authorization': `Kinvey ${sessionStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            })
        }
    }
}