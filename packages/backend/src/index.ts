import { createExpressServer } from "routing-controllers";
import Controllers from "src/controllers";
import { Express } from "express";
import 'reflect-metadata'
import * as swaggerUiExpress from 'swagger-ui-express'
import { openApi } from "src/swagger/swagger";

const port = 5000;

const app: Express = createExpressServer({
  cors: {
    origin: "http://localhost:3000",
  },
  controllers: Controllers, // we specify controllers we want to use
});

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(openApi))

app.listen(port, () => console.log(`Running on port ${port}`));

