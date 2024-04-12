import {dropDatabase} from 'typeorm-extension';
import {AppDataSource} from "../data-source";

(async () => {
  await dropDatabase({
    options: AppDataSource.options
  });
})();
