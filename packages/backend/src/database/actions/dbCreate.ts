import { createDatabase } from 'typeorm-extension';
import {AppDataSource} from "../data-source";

(async () => {
  await createDatabase({
    options: AppDataSource.options
  });

  await AppDataSource.initialize();
})();
