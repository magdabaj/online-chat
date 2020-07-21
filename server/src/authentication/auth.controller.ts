import { sequelize } from "../../connectPgClient";
import UserModel from "../user/user.model";
import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import {Op} from 'sequelize'
import {secret} from "../../secrets/secret";

// const Op = sequelize.Sequelize.Op
export const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        await UserModel.create({
            email: req.body.email,
            password: bcrypt.hash(req.body.password, 10)
        })
    } catch (e) {
        res.status(500).send(e)
    }

}

export const signIn = async (req:Request, res: Response): Promise<any> => {
    try {
        const user = await UserModel.findOne({
            where: {
                email: req.body.email
            }
        })

        if (!user) return res.status(404).send({message: 'UserModel not found'})

        const passwordIsValid = bcrypt.compare(req.body.password, user.dataValues.password)

        if (!passwordIsValid) return res.status(401).send({
            accessToken: null,
            message: "Invalid password"
        })

        const token = jwt.sign({ id: user.id}, secret, {
            expiresIn: 86400 //24hours
        })

        await user.update({token: token})

        res.status(200).send({
            id: user.id,
            email: user.email,
            token
        })
    } catch (e) {
        res.status(500).send(e)
    }

}