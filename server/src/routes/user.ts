// import {checkJwt} from "../migration/checkJwt";
// import {Router} from "express";
// import {UserController} from "../controller/UserController";
//
// const router = Router();
//
// router.get('/', [checkJwt], UserController.all);
//
// router.get('/:id([0-9]+)', [checkJwt], UserController.getOneById);
//
// router.post('/', [checkJwt], UserController.newUser);
//
// router.patch('/:id([0-9]+)', [checkJwt], UserController.editUser);
//
// router.delete('/:id([0-9]+)', [checkJwt], UserController.deleteUser);
//
// export default router;