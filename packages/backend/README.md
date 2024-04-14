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
2. `docker-compose up -d`
3. `yarn run seed:fresh`
4. `yarn run dev`

### Для FrontEnd разработчиков

1. `yarn install`
2. `docker-compose up -d`
3. `yarn run seed:fresh`
4. `yarn run start`

### В prod-mode

1. `yarn install --immutable`
2. `docker-compose up -d`
3. `yarn run start`

### CI/CD

1. `yarn install --immutable`
2. `yarn run build:routes`
3. `yarn run types`
4. `yarn run lint:check`
5. `yarn run prettier:check`

### Проверка кода:

1. `yarn run check`
