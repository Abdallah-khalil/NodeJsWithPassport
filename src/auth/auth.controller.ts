import { Controller, Get, Res, Req, Next } from '@nestjs/common';
import * as passport from 'passport';

@Controller("auth")
export class AuthController {
    constructor() { }

    @Get("google/callback")
    public async googleCallback() {
        await passport.authenticate('google', {
            successRedirect: '/user',
            failureRedirect: "/error"
        });
    }

    @Get("google")
    public async googleSignIn( @Req() req, @Res() res, @Next() next) {
        await passport.authenticate('google', {
            scope: ['profile', 'email']
        });
    }


}