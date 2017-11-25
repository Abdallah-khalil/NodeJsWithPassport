import { OAuth2Strategy } from 'passport-google-oauth';
import { SecretKey } from './secretKeys';
import { Component } from '@nestjs/common';
import * as passport from 'passport';
import { IUserModel } from '../../auth/user.model';
@Component()
export class PassportGoogleService extends OAuth2Strategy {
    constructor(private secretKey: SecretKey) {
        super({
            clientID: secretKey.getGoogleKeys().clientID,
            clientSecret: secretKey.getGoogleKeys().clientSecret,
            callbackURL: 'http://localhost:6600/auth/google/callback',
            passReqToCallback: true
        }, (req, accessToken, refreshToken, profile, done) => {
            const user: IUserModel = {
                email: profile.emails[0].value,
                image: profile._json.image.url,
                displayName: profile.displayName,
                googleAccount: {
                    googleId: profile.id,
                    googleToken: accessToken
                }
            };
            return done(null, user);
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