import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Middleware()
export class CheckUserMiddleware implements NestMiddleware {
    constructor() { }

    async resolve(...args: any[]): Promise<ExpressMiddleware> {
        return async (req: Request, res: Response, next: NextFunction) => {
            if (!req.user) {
                res.redirect("/home");
            }
            next();
        }

    }
}