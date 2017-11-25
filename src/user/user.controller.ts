import { Controller, Get, Res, Req } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor() { }

    @Get()
    public getUsers( @Res() res, @Req() req) {
        res.render('user', {
            title: "Users Page",
            user: { name: req.user.displayName, image: req.user.image }
        });
    }
}
