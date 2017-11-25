import { Controller, Get, Post, Body, Res, Req } from '@nestjs/common';

@Controller('home')
export class HomeController {
    constructor() { }

    @Get('/')
    public getHomePage( @Res() res) {
        res.render('index', {
            title: "Social Aggregate"
        });
    }

}


@Controller('error')
export class ErrorController {
    constructor() { }

    @Get()
    public getError( @Res() res) {
        res.render('error', {
            title: "Error Page"
        });
    }
}