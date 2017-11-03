import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { HomeController, ErrorController, UserController } from './main.controller';
import { AuthModule } from '../auth/auth.module';
import { CheckUserMiddleware } from '../auth/checkUser.middleware';
@Module({
    modules: [AuthModule],
    controllers: [HomeController, ErrorController, UserController],
    components: []
})
export class MainModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(CheckUserMiddleware).forRoutes(
            { path: '/user', method: RequestMethod.ALL }
        )
    }
}