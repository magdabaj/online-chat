"use strict";
exports.__esModule = true;
var express_1 = require("express");
var http_1 = require("http");
var cors_1 = require("cors");
var process = require("process");
var connectPgClient_1 = require("./connectPgClient");
connectPgClient_1.testConnection().then(function (r) { return console.log(r); });
var App = /** @class */ (function () {
    function App() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }
    App.prototype.createApp = function () {
        this.app = express_1["default"]();
        this.app.use(cors_1["default"]({
            origin: 'http://localhost:5000'
        }));
    };
    App.prototype.createServer = function () {
        this.server = http_1["default"].createServer(this.app);
    };
    App.prototype.config = function () {
        this.port = process.env.PORT || App.PORT;
    };
    App.prototype.sockets = function () {
        this.io = require("socket.io").listen(this.server, { origins: '*:*' });
    };
    App.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log("Running server on port " + _this.port);
        });
        this.io.on("connection", function (client) {
            console.log("Connected client on port %s.", _this.port);
            client.on('chat', function (data) {
                console.log('Message received', data);
                _this.io.emit('chat', data);
            });
        });
        this.io.on("connect", function (socket) {
            console.log("Connected client on port " + _this.port);
        });
    };
    App.prototype.getApp = function () {
        return this.app;
    };
    App.PORT = 8080;
    return App;
}());
new App().getApp();
