import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import {validate} from "class-validator";

export class UserController {

    private userRepository = getRepository(User);

    static listAll = async (req: Request, res: Response) => {
        const users = await User.find({
            select: ['id', 'email']
        })

        res.send(users)
    }

    static getOneById = async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            const user = await User.findOneOrFail(id, {
                select: ['id', 'email'],
            })
            res.status(200).send(user)
        } catch (e) {
            res.status(404).send('User not found')
        }
    }

    static newUser = async (req: Request, res:Response) => {
        let { email, password, role} = req.body;
        let user = new User();
        user.email = email;
        user.password = password;

        const errors = await validate(user)
        if (errors.length > 0) {
            res.status(400).send(errors)
            return;
        }

        user.hashPassword();

        try {
            await User.save(user)
        } catch (e) {
            res.status(409).send('email already in use');
            return;
        }

        res.status(201).send('User created')
    }

    static editUser = async (req: Request, res: Response) => {
        const id = req.params.id;

        const { email, role } = req.body;

        let user;

        try {
            user = await User.findOneOrFail(id);
        } catch (e) {
            res.status(404).send('User not found')
            return;
        }

        user.email = email;
        user.role  = role;
        const errors = await validate(user)
        if (errors.length > 0) {
            res.status(400).send(errors)
            return;
        }

        try {
            await User.save(user)
        } catch (e) {
            res.status(409).send('email already in use')
            return;
        }

        res.status(204).send('User updated')
    }

    static deleteUser = async (req: Request, res: Response) => {
        const id = req.params.id;

        let user: User;
        try {
            user = await User.findOneOrFail(id);
        } catch (e) {
            res.status(404).send('User not found')
            return;
        }

        await User.delete(id)
        res.status(204).send('User deleted')
    }

    // async all(request: Request, response: Response, next: NextFunction) {
    //     return this.userRepository.find();
    // }
    //
    // async one(request: Request, response: Response, next: NextFunction) {
    //     return this.userRepository.findOne(request.params.id);
    // }
    //
    // async save(request: Request, response: Response, next: NextFunction) {
    //     return this.userRepository.save(request.body);
    // }
    //
    // async remove(request: Request, response: Response, next: NextFunction) {
    //     let userToRemove = await this.userRepository.findOne(request.params.id);
    //     await this.userRepository.remove(userToRemove);
    // }

}