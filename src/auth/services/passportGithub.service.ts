import * as passport from 'passport';
import { Strategy } from 'passport-github';
import { Component } from '@nestjs/common';
import { SecretKey } from './secretKeys';
import { IUserModel } from '../../auth/user.model';

@Component()
export class PassportGithubService extends Strategy {
    constructor(private secretKey: SecretKey) {
        super({
            clientID: secretKey.getGithubKeys().clientID,
            clientSecret: secretKey.getGithubKeys().clientSecret,
            callbackURL: "http://localhost:6600/auth/github/callback"
        }, (accessToken, tokenSecret, profile, done) => {
            const user: IUserModel = {
                email: profile.emails[0].value,
                image: profile.photos[0].value,
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