import {Router} from "express";
import {UserRouter} from "./User/User.router";

type TRoutesList = { path: string, router: Router }[];

export const RoutesList: TRoutesList = [
  {
    path: "/users",
    router: UserRouter
  }
]
