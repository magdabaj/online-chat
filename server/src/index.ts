import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from 'express'
import {Response, Request, Router} from "express";
import * as bodyParser from "body-parser";
import * as cors from 'cors';
import * as helmet from "helmet";
// import routes from "./routes/index";
import {User} from "./entity/User";
import {Routes} from "./routes";

createConnection().then(async connection => {
    // create express app
    const app: express.Application = express();
    app.use(Router)
    app.use(bodyParser.json());
    app.use(cors({
        origin: 'http://localhost:5000/'
    }));
    app.use(helmet())
    // app.use('/', routes)

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000, () => {
        console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");
    });

    // insert new users for test
    await connection.manager.save(connection.manager.create(User, {
        email: "magda",
        password: "magda",
    }));
    // await connection.manager.save(connection.manager.create(User, {
    //     email: "Phantom",
    //     password: "Phantom",
    // }));


}).catch(error => console.log(error));
