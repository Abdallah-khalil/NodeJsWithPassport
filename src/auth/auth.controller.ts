import { Controller, Get, Res, Req, Next } from '@nestjs/common';
import * as passport from 'passport';

@Controller("auth")
export class AuthController {
    constructor() { }

    @Get("google/callback")
    public async googleCallback() {

    }

    @Get("google")
    public async googleSignIn() {

    }

    @Get("facebook")
    public async facebookSignIn() {

    }

    @Get("facebook/callback")
    public async facebookCallBack() {

    }

    
    @Get("github")
    public async githubSignIn() {

    }

    @Get("github/callback")
    public async githubCallBack() {

    }

}