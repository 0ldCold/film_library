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

## Архитектура

1. Основной код приложения разделен на папки `contollers` и `etities`;
2. В папках `contollers` и `etities` хранятся папки с сущностями (таблицами из БД);
3. Папки сущностей называются по имени таблицы в БД;
4. Таблицы называются в PascalCase;
5. В `entities` лежит код, отвечающий за структуру БД и за ее наполнение сидами;
6. Сущности в `entities` разделены на несколько частей:
    - `entity`: определение таблицы;
    - `factory`: генератор элемента таблицы для сидов;
    - `seeder`: генератор необходимого количества сидов;
7. Части сущностей в `entities` Именуются по принципу `$EntityName$.$partName$`.
Например `Users.entity`, `Users.factory`;
8. Все части сущностей группируются в файлах с соответствующим названием по виду части. 
Т.е. все `factory` импортируются в `factories`;
9. В `controllers` лежат код, отвечающий за эндпоинты и работу с БД;
10. Сущности в `controllers` разделены на несколько частей:
    - `DTO`: интерфейсы для отправки и получения данных через эндпоинты. 
Также они выполняют роль валидации (при помощи JSDoc). Важный момент! 
Тут нельзя использовать сущности из `entity`;
    - `service`: класс для работы с БД (отправки запросов);
    - `controller`: класс для обработки запросов на эндпоинты. Важный момент! 
Вся бизнес-логика должна находиться в `service`. Тут только работа с API;
    - `test`: e2e тесты эндпоинтов;
11. Части сущностей в `controllers` именуются аналогично частям в `entities`. Смотри пункт 7;
12. Код из `controllers` никуда не импортируется. Он собирается роуты и сваггер 
при помощи `yarn run build:routes`.
