import { Request, Response, NextFunction} from "express";
import * as jwt from 'jsonwebtoken';
import { secret } from "../secrets/secret";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    let token: string = <string>req.headers['authorization']
    let jwtPayload;

    try {
        jwtPayload = <any>jwt.verify(token.replace('Bearer ', ''), secret);
        res.locals.jwtPayload = jwtPayload;
    } catch (e) {
        res.status(401).json('unauthorised')
        return;
    }

    const { userId, username } = jwtPayload;
    const newToken = jwt.sign({ userId, username }, secret, {
        expiresIn: '1h'
    });
    res.setHeader('token', newToken)
    next()
}