import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as expressSession from 'express-session';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as passport from 'passport';

import { ApplicationModule } from './app.module';
import { PassportService } from './common/services/passport.service';

async function bootstrap() {
  const expressApp: express.Application = express();
  expressApp.set("views", path.join(__dirname, "views"));
  expressApp.set("view engine", "ejs");
  // expressApp.use(favicon(path.join(__dirname, "../../public", "favicon.ico")));
  // expressApp.use(logger("dev"));
  expressApp.use(bodyParser.json());
  expressApp.use(bodyParser.urlencoded({ extended: false }));
  // expressApp.use(cookieParser());
  expressApp.use(express.static(path.join(__dirname, "../public")));

  // Configure the passport 
  new PassportService(passport);
  expressApp.use(passport.initialize());
  expressApp.use(passport.session());
  expressApp.use(expressSession({
    secret: 'Naryman'
  }));

  const app = await NestFactory.create(ApplicationModule, expressApp);
  const port = 6600;
  await app.listen(port, () => {
    console.log("app is listening on port " + port);
  });

}
bootstrap();
