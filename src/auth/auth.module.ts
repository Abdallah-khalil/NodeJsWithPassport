import {
    Module, NestModule,
    MiddlewaresConsumer,
    RequestMethod,
} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportService } from '../common/services/passport.service';
import { SecretKey } from '../common/services/secretKeys';
import * as passport from 'passport';
@Module({
    controllers: [AuthController],
    components: [PassportService, SecretKey]
})
export class AuthModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(passport.authenticate('google', {
                scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
            }))
            .forRoutes({ path: '/auth/google', method: RequestMethod.GET })
            .apply(passport.authenticate('google', {
                successRedirect: '/user',
                failureRedirect: "/error"
            }))
            .forRoutes({ path: '/auth/google/callback', method: RequestMethod.GET });
    }
}