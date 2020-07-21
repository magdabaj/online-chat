import jwt from 'jsonwebtoken'
import { secret } from "../../secrets/secret";
import { sequelize } from "../../connectPgClient";
import UserModel from "../user/user.model";
import {Request, Response} from "express";

const verifyToken = async (req: Request, res: Response, next):Promise<any> => {
    let token = req.headers["x-access-token"]

    if (!token) return res.status(403).send("No token Provided")

    jwt.verify(token, secret, (err, decoded) => {
        if (err) return res.status(401).send('Unauthorized!')

        req.userId = decoded.id
        next()
    })
}