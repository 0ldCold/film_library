import "reflect-metadata";

import express, {json, Response as ExResponse, Request as ExRequest, urlencoded} from "express";
import {AppDataSource} from "./database/data-source"

import {isExist} from "./helpers/isExist";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./routes";
import swagger from "../swagger.json";
import {errorHandler} from "src/middlewares/error/errorHeandler";

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

  app.use(errorHandler);


  // start express server
  app.listen(+port, () => {
    console.log(`Express server has started on port ${port}. Open http://localhost:${port}/docs to see results`)
  })

}).catch(error => console.log(error))
