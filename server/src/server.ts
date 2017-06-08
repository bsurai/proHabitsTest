import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./modules/app.module";

import * as express from "express";
import * as jwt from "express-jwt";
import * as jwks from "jwks-rsa";
import * as cors from "cors";
import * as bodyParser from "body-parser";

import { HOST, PORT_CLIENT, PORT_SERVER } from "./config";

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://pro-habits-test111.eu.auth0.com/.well-known/jwks.json"
    }),
    audience: "pro-habits-test111-11.eu.auth0.com",
    issuer: "https://pro-habits-test111.eu.auth0.com/",
    algorithms: ["RS256"]
});


const instance = express();

instance.use(cors({ origin: `${HOST}:${PORT_CLIENT}` }));
instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({ extended: true }));
instance.use(jwtCheck, function (req: express.Request, res: express.Response, next: express.NextFunction) {
    // console.log("req.user=");
    // console.log(req.user);
    next();
    /* if (!req.user) {
        // return res.sendStatus(401);
    }
    res.sendStatus(200);*/
});


const app = NestFactory.create(ApplicationModule, instance);

app.listen(PORT_SERVER, () => console.log(`Application is listening on port ${PORT_SERVER}.`));