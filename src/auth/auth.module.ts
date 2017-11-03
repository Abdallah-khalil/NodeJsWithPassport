import {
    Module, NestModule,
    MiddlewaresConsumer,
    RequestMethod,
} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportGoogleService } from '../common/services/passportGoogle.service';
import { SecretKey } from '../common/services/secretKeys';
import * as passport from 'passport';
import { CheckUserMiddleware } from './checkUser.middleware';
@Module({
    controllers: [AuthController],
    components: [PassportGoogleService, SecretKey, CheckUserMiddleware],
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
            .forRoutes({ path: '/auth/google/callback', method: RequestMethod.GET });
    }
}