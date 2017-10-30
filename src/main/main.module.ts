import { Module } from '@nestjs/common';
import { HomeController, ErrorController, UserController } from './main.controller';
@Module({
    modules: [],
    controllers: [HomeController, ErrorController, UserController],
    components: []
})
export class MainModule {

}