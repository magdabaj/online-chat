"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var port = 3000;
var App = /** @class */ (function () {
    function App(port) {
        this.port = port;
        var app = express_1["default"]();
        app.use(express_1["default"].static(path_1["default"].join(__dirname, '../client')));
        this.server = new http_1["default"].Server(app);
        var io = socket_io_1["default"](this.server);
        io.on('connection', function (socket) {
            console.log('user connected ' + socket.id);
        });
    }
    App.prototype.Start = function () {
        this.server.listen(this.port);
        console.log("Server listening on port " + this.port);
    };
    return App;
}());
new App(port).Start();
