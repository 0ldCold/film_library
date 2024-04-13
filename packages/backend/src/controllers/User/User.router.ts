import {Router} from "express";
import {UserController} from './User.controller';

export const UserRouter = Router();

UserRouter.get('/', (req, res, next) => {
  const controller = new UserController();
  controller.all(req, res, next)
    .then((result) => res.json(result))
    .catch((error) => next(error));
});
UserRouter.get("/:id", (req, res, next) => {
  const controller = new UserController();
  controller.one(req, res, next)
    .then((result) => res.json(result))
    .catch((error) => next(error));
})
UserRouter.post("/", (req, res, next) => {
  const controller = new UserController();
  controller.save(req, res, next)
    .then(() => res.status(201).send())
    .catch((error) => next(error))
})
UserRouter.delete("/:id", (req, res, next) => {
  const controller = new UserController();
  controller.remove(req, res, next)
    .then(() => res.status(204).send())
    .catch((error) => next(error));
})
