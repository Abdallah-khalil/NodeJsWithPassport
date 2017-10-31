import { OAuth2Strategy } from 'passport-google-oauth';
import { SecretKey } from './secretKeys';
import { Component } from '@nestjs/common';
import * as passport from 'passport'
@Component()
export class PassportService extends OAuth2Strategy {
    constructor(private secretKey: SecretKey) {
        super({
            clientID: "749598100296-43vrlaeuikdbgo43r4piadf6cujfso5v.apps.googleusercontent.com",
            clientSecret: "NyrfQE8zpd8P6FEkNVL4pozQ",
            callbackURL: 'http://localhost:6600/auth/google/callback',
            passReqToCallback: true
        }, (req, accessToken, refreshToken, profile, done) => {
           return done(null, profile);
        })

        passport.use(this);
 
        passport.serializeUser((user, done) => {
            done(null, user);
        });

        passport.deserializeUser((user, done) => {
            done(null, user);
        });
    }


}