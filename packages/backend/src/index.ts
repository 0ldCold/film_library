import { createExpressServer } from "routing-controllers";
import Controllers from "./controllers";

const port = 5000;

const app = createExpressServer({
  cors: {
    origin: "http://localhost:3000",
  },
  controllers: Controllers, // we specify controllers we want to use
});

app.listen(port, () => console.log(`Running on port ${port}`));
