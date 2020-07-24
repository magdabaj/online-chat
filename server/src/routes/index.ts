import {Request, Response, Router} from "express";
import user from './user';
import auth from './auth'

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    res.send('hello world')
})

routes.use('/user', user);
routes.use('/auth', auth);

export default routes;