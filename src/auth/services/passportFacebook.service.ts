import * as passport from 'passport';
import { Strategy } from 'passport-facebook';
import { Component } from '@nestjs/common';
import { SecretKey } from './secretKeys';
import { IUserModel } from '../../auth/user.model';

@Component()
export class PassportFacebookService extends Strategy {
    constructor(private secretKey: SecretKey) {
        super({
            clientID: secretKey.getFacebookKeys().clientID,
            clientSecret: secretKey.getFacebookKeys().clientSecret,
            callbackURL: "http://localhost:6600/auth/facebook/callback",
            passReqToCallback: true
        }, (req, accessToken, tokenSecret, profile, done) => {
            const user: IUserModel = {
                //email: profile.emails[0].value,
                image: profile._json.image.url,
                displayName: profile.displayName,
                facebookAccount: {
                    facebookId: profile.id,
                    facebookToken: accessToken
                }
            };
            return done(null, user);
        });

        passport.use(this);
    }
}