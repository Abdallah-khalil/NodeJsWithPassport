import * as passport from 'passport';
import { Strategy } from 'passport-twitter';
import { Component } from '@nestjs/common';
import { SecretKey } from './secretKeys';
import { IUserModel } from '../../auth/user.model';

@Component()
export class PassportTwitterService extends Strategy {
    constructor(private secretKey: SecretKey) {
        super({
            consumerKey: "",
            consumerSecret: "",
            callbackURL: "",
            passReqToCallback: true
        }, (req, accessToken, tokenSecret, profile, done) => {
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
        });

        passport.use(this);        
    }
}