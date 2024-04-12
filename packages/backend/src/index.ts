import "reflect-metadata"

import express from "express"
import bodyParser from "body-parser"
import {Request, Response} from "express"
import {AppDataSource} from "./database/data-source"
import {Routes} from "./routes"
import {isExist} from "./helpers/isExist";

const port = process.env.VITE_APP_PORT;
if (!isExist(port) || Number.isNaN(+port)) {
  throw new Error("Проверьте наличие и правильность порта в .env")
}

AppDataSource.initialize().then(async () => {

  // create express app
  const app = express()
  app.use(bodyParser.json())

  Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
      const result = (new (route.controller as any))[route.action](req, res, next)
      if (result instanceof Promise) {
        result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

      } else if (result !== null && result !== undefined) {
        res.json(result)
      }
    })
  })

  // setup express app here
  // ...

  // start express server
  app.listen(+port)

  console.log(`Express server has started on port 3000. Open http://localhost:${port}/users to see results`)

}).catch(error => console.log(error))
