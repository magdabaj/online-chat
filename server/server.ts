import express from "express"
import http from 'http'
import cors from "cors"
import SocketIO from 'socket.io'
import {Message} from "./model/message";
import * as process from "process";

class App {
    private static readonly PORT:number = 8080
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
    }

    private createApp(): void {
        this.app = express()
        this.app.use(cors({
            origin: 'http://localhost:5000'
        }))
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

    public getApp(): express.Application {
        return this.app;
    }
}

let app = new App().getApp();
export { app }