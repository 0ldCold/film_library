import "reflect-metadata";

import express, {json, Response as ExResponse, Request as ExRequest, urlencoded, NextFunction,} from "express";
import {AppDataSource} from "./database/data-source"

import {isExist} from "./helpers/isExist";
import {NotFoundError} from "./helpers/errors";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "../build/routes";
import swagger from "../build/swagger.json";

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


  app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(
      swaggerUi.generateHTML(swagger)
    );
  });
  RegisterRoutes(app);

  app.use((err: unknown, _: ExRequest, res: ExResponse, next: NextFunction) => {
    if (err instanceof NotFoundError) {
      return res.status(404).send(err.message);
    }
    return next();
  })


  // start express server
  app.listen(+port, () => {
    console.log(`Express server has started on port ${port}. Open http://localhost:${port}/users to see results`)
  })

}).catch(error => console.log(error))
