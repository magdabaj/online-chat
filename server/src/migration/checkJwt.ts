import { Request, Response, NextFunction} from "express";
import * as jwt from 'jsonwebtoken';
import { secret } from "../secrets/secret";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    let token: string = <string>req.headers['authorization']
    let jwtPayload;

}