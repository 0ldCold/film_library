import "reflect-metadata"

import express, {json, urlencoded, } from "express";
import {AppDataSource} from "./database/data-source"

import {isExist} from "./helpers/isExist";
import {RoutesList} from "./controller/routes";

const port = process.env.VITE_APP_PORT;
if (!isExist(port) || Number.isNaN(+port)) {
  throw new Error("Проверьте наличие и правильность порта в .env")
}

AppDataSource.initialize().then(async () => {

  const app = express();

  app.use(
    urlencoded({
      extended: true,
    })
  );
  app.use(json());

  RoutesList.map((route) => {
    app.use(route.path, route.router)
  })

  // start express server
  app.listen(+port)

  console.log(`Express server has started on port 3000. Open http://localhost:${port}/users to see results`)

}).catch(error => console.log(error))
