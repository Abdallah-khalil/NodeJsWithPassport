import {
    Module, NestModule,
    MiddlewaresConsumer,
    RequestMethod,
} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportGoogleService } from './services/passportGoogle.service';
import { PassportFacebookService } from './services/passportFacebook.service';
import { PassportGithubService } from './services/passportGithub.service';
import { SecretKey } from './services/secretKeys';
import * as passport from 'passport';
import { CheckUserMiddleware } from './checkUser.middleware';
@Module({
    controllers: [AuthController],
    components: [PassportGoogleService, PassportFacebookService, PassportGithubService, SecretKey, CheckUserMiddleware],
    exports: [CheckUserMiddleware]
})
export class AuthModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
        
            // google Login
            .apply(passport.authenticate('google', {
                scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
            }))
            .forRoutes({ path: '/auth/google', method: RequestMethod.GET })
            // google CallBack URL
            .apply(passport.authenticate('google', {
                successRedirect: '/user',
                failureRedirect: "/error"
            }))
            .forRoutes({ path: '/auth/google/callback', method: RequestMethod.GET })

            //
            //
            // facebook Login
            .apply(passport.authenticate('facebook', {
                scope: ['email']
            }))
            .forRoutes({ path: '/auth/facebook', method: RequestMethod.ALL })
            // facebook callback
            .apply(passport.authenticate('facebook', {
                successRedirect: '/user',
                failureRedirect: "/error"
            }))
            .forRoutes({ path: '/auth/facebook/callback', method: RequestMethod.ALL })

            // 
            //
            //github login
            .apply(passport.authenticate('github', {
                scope: ['email']
            }))
            .forRoutes({ path: "/auth/github", method: RequestMethod.ALL })
            //github callback
            .apply(passport.authenticate('github', {
                successRedirect: '/user',
                failureRedirect: '/error'
            }))
            .forRoutes({ path: '/auth/github/callback', method: RequestMethod.ALL });

    }
}