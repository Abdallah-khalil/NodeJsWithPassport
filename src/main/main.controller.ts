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


@Controller('user')
export class UserController {
    constructor() { }

    @Get()
    public getUsers( @Res() res, @Req() req) {
        res.render('user', {
            title: "Users Page",
            user: { name: req.user.displayName, image: req.user._json.image.url }
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