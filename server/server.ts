import express from "express"
import http from 'http'
import cors from "cors"
import SocketIO from 'socket.io'
import * as process from "process";
import bodyParser from 'body-parser'
import { synchronizeDatabase, sequelize } from "./connectPgClient";
import passport from 'passport'
import passportJWT from 'passport-jwt'
import {createUser} from "./src/user/user.controller";
import UserModel from "./src/user/user.model";
import * as bcrypt from 'bcrypt'

// let ExtractJwt = passportJWT.ExtractJwt;
// let JwtStrategy = passportJWT.Strategy;
//
// let jwtOptions = {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: "secret"
// };
//
// let strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
//     console.log('payload received', jwt_payload)
//     let user = getUser({id: jwt_payload.id});
//
//     if (user) next(null, user)
//     else next(null, false)
// })
//
// passport.use(strategy)
async function createUser() {
    const user = await UserModel.create({
        email: 'magda1',
        password: bcrypt.hashSync('magda', 10).toString()
    })

    console.log('user created', user)
}
async function findUser() {
    const user = await UserModel.findOne({
        where: {
            email: 'magda1'
        }
    })

    console.log('user', user.dataValues.password)
}
findUser().then(r => console.log('res', r))

class App {
    private static readonly PORT:number = 3000
    private app: express.Application
    private server: http.Server
    private io: SocketIO.Server
    private port: string | number

    constructor() {
        this.createApp()
        this.config()
        this.createServer()
        this.sockets()
        this.listen()
        this.synchronise()
    }

    private createApp(): void {
        this.app = express()
        this.app.use(cors({
            origin: 'http://localhost:5000'
        }))
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true}))
    }

    private createServer(): void {
        this.server = http.createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || App.PORT
    }

    private sockets():void {
        this.io = require("socket.io").listen(this.server, {origins: '*:*'})
    }

    private listen():void {
        this.server.listen(this.port, () => {
            console.log(`Running server on port ${this.port}`)
        })

        this.io.on("connection", (client: any) => {
            console.log("Connected client on port %s.", this.port);
            client.on('chat', data => {
                console.log('Message received', data)
                this.io.emit('chat', data)
            })
        });

        this.io.on("connect", (socket: any) => {
            console.log(`Connected client on port ${this.port}`)
        })
    }

    private synchronise(): void {
        synchronizeDatabase()
    }

    public getApp(): express.Application {
        return this.app;
    }
}

new App().getApp();
