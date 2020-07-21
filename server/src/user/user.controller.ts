import { Request, Response, NextFunction } from "express";
import UserModel from "./user.model"
import * as bcrypt from 'bcrypt'

export const createUser = async (req: Request, res: Response) :Promise<void> => {
    try{
        const { email, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 10)
        await UserModel.create({email, password: passwordHash})
        res.status(201).send({ email: email /*, id: res.id*/})
    } catch (e) {
        res.status(500).send(new Error('wrong password'))
    }
}

