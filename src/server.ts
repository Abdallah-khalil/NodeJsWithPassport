import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as expressSession from 'express-session';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as passport from 'passport';

import { ApplicationModule } from './app.module';
import { PassportService } from './common/services/passport.service';


const expressApp: express.Application = express();
expressApp.set("views", path.join(__dirname, "views"));
expressApp.set("view engine", "ejs");
// expressApp.use(favicon(path.join(__dirname, "../../public", "favicon.ico")));
// expressApp.use(logger("dev"));
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: false }));
// expressApp.use(cookieParser());
expressApp.use(express.static(path.join(__dirname, "../public")));
 
expressApp.use(expressSession({
  secret: 'Naryman'
}));


async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule, expressApp);
  app.use(passport.initialize());
  app.use(passport.session());   
  const port = 6600;
  await app.listen(port, () => {
    console.log("app is listening on port " + port);
  });

}
bootstrap();
