import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

import * as express from 'express';
import * as jwt from "express-jwt";
import * as jwks from "jwks-rsa";
import * as cors from "cors";
import * as bodyParser from "body-parser";

const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        jwksUri: "https://{YOUR-AUTH0-DOMAIN}/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: '{YOUR-API-AUDIENCE-ATTRIBUTE}',
    issuer: '{YOUR-AUTH0-DOMAIN}',
    algorithms: ['RS256']
});


const instance = express();

instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({ extended: true }));
instance.use(cors({ origin: "http://localhost:3000" }));

const app = NestFactory.create(ApplicationModule, instance);

// app.get(.....)
// app.post(.....)

app.listen(4000, () => console.log('Application is listening on port 4000.'));