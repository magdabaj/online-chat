import {Request, Response} from "express";
import * as jwt from 'jsonwebtoken';
import {User} from "../entity/User";
import {secret} from "../secrets/secret";
import {validate} from "class-validator";

class AuthController {
    static login = async (req: Request, res: Response) => {
        let { email, password } = req.body;
        if(!(email && password)) {
            res.status(400).send('bad request')
        }

        let user: User;
        try {
            user = await User.findOneOrFail({ where: {email}});
        } catch (e) {
            res.status(401).send('unauthorised')
        }

        if (!user.checkIfUnencryptedPasswordIsValid(password)) {
            res.status(401).send('unauthorised')
            return;
        }

        const token = jwt.sign({ userId: user.id, email: user.email }, secret, {
            expiresIn: '1h'
        })

        res.send(token)
    }

    static changePassword = async (req: Request, res: Response) => {
        const id = res.locals.jwtPayload.userId;

        const { oldPassword, newPassword } = req.body;

        if(!(oldPassword&&newPassword)) res.status(400).send('bad request')

        let user:User;

        try {
            user = await User.findOneOrFail(id)
        } catch (e) {
            res.status(401).send('unauthorised')
        }

        if(!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
            res.status(401).send('unauthorised')
            return;
        }

        user.password = newPassword;
        const errors = await validate(user)

        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }

        user.hashPassword()
        await User.save(user)

        res.status(201).send('user created')
    }

}

export default AuthController;