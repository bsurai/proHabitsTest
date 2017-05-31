import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

import * as express from 'express';
import * as jwt from "express-jwt";
import * as jwks from "jwks-rsa";
import * as cors from "cors";
import * as bodyParser from "body-parser";

import {HOST, PORT_CLIENT, PORT_SERVER} from "./config";

/* const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        // pro-habits-test111.eu.auth0.com
        jwksUri: "https://pro-habits-test111.eu.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'https://pro-habits-test111.eu.auth0.com',
    issuer: 'https://pro-habits-test111.eu.auth0.com',
    algorithms: ['RS256']
});*/


const instance = express();

instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({ extended: true }));
instance.use(cors({ origin: `${HOST}:${PORT_CLIENT}` }));

const app = NestFactory.create(ApplicationModule, instance);

// app.get(.....)
// app.post(.....)

app.listen(PORT_SERVER, () => console.log(`Application is listening on port ${PORT_SERVER}.`));