import {Request, Response} from "express";
import UserModel from "../user/user.model";

export const checkDuplicateEmail = async  (req: Request, res: Response, next) :Promise<void> => {
    try{
        const user = await UserModel.findOne({
            where: {
                email: req.body.email
            }
        })
        res.status(400).send({message: "Username already in use"})
    } catch (e) {
        res.status(500).send(e)
    }

    next()
}