import { OAuth2Strategy } from 'passport-google-oauth';

export class PassportService {


    constructor(private passport) {

        const strategy: OAuth2Strategy = new OAuth2Strategy({
            clientID: '1092317126531-4cha732kjpatlcs6aprvrep2acir6bc9.apps.googleusercontent.com',
            clientSecret: '5kABdkBVyH-hZ_QiizGHqKez',
            callbackURL: 'http://localhost:6600/auth/google/callback',
            passReqToCallback: true
        }, (req, accessToken, refreshToken, profile, done) => {
           return done(null, profile);
        });

        passport.use(strategy);
        passport.serializeUser((user, done) => {
            done(null, user);
        });

        passport.deserializeUser((user, done) => {
            done(null, user);
        });
    }


}