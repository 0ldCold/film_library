# BackEnd

## Стек

- [Express.js](https://github.com/expressjs/express)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [PostgreSQL](https://github.com/postgres/postgres)
- [TypeORM](https://github.com/typeorm/typeorm)
- [TSOA](https://github.com/lukeautry/tsoa)
- [class-validator](https://github.com/typestack/class-validator)

## Запуск

### В dev-mode

1. `yarn install`
2. `docker-compose up`
3. `yarn run seed:fresh`
4. `yarn run build:routes`
5. `yarn run dev`

### В prod-mode

1. `yarn install --immutable`
2. `docker-compose up`
3. `yarn run build:routes`
4. `yarn run start`

### CI/CD

1. `yarn install --immutable`
2. `yarn run build:routes`
3. `yarn run types`
4. `yarn run test`

### Проверка кода:

1. `yarn run check`
