import {Router} from "express";
import {UserController} from './User.controller';

export const UserRouter = Router();

UserRouter.get('/', (_, res, next) => {
  const controller = new UserController();
  controller.all()
    .then((result) => res.json(result))
    .catch((error) => next(error));
});
UserRouter.get("/:id", (req, res, next) => {
  const controller = new UserController();
  controller.one(req)
    .then((result) => res.json(result))
    .catch((error) => next(error));
})
UserRouter.post("/", (req, res, next) => {
  const controller = new UserController();
  controller.save(req)
    .then(() => res.status(201).send())
    .catch((error) => next(error))
})
UserRouter.delete("/:id", (req, res, next) => {
  const controller = new UserController();
  controller.remove(req)
    .then(() => res.status(204).send())
    .catch((error) => next(error));
})
