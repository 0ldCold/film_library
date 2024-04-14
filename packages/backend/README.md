# BackEnd

---

# Содержание

- [Стек](#Стек)
- [Запуск](#Запуск)
- [Архитектура](#Архитектура)
- [Миграции](#Миграции)

---

## Стек

- [Express.js](https://github.com/expressjs/express)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [PostgreSQL](https://github.com/postgres/postgres)
- [TypeORM](https://github.com/typeorm/typeorm)
- [TSOA](https://github.com/lukeautry/tsoa)
- [class-validator](https://github.com/typestack/class-validator)

---

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

---

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
7. Части сущностей в `entities` Именуются по принципу `$EntityName$.$partName$`.<br>
   Например `Users.entity`, `Users.factory`;
8. Все части сущностей группируются в файлах с соответствующим названием по виду части.<br>
   Т.е. все `factory` импортируются в `factories`;
9. В `controllers` лежат код, отвечающий за эндпоинты и работу с БД;
10. Сущности в `controllers` разделены на несколько частей:
    - `DTO`: интерфейсы для отправки и получения данных через эндпоинты.<br>
      Также они выполняют роль валидации (при помощи JSDoc).<br>
      Важный момент! Тут нельзя использовать сущности из `entity`;
    - `service`: класс для работы с БД (отправки запросов);
    - `controller`: класс для обработки запросов на эндпоинты.<br>
      Важный момент! Вся бизнес-логика должна находиться в `service`. Тут только работа с API;
    - `test`: e2e тесты эндпоинтов;
11. Части сущностей в `controllers` именуются аналогично частям в `entities`. Смотри пункт 7;
12. Код из `controllers` никуда не импортируется. Он собирается роуты и сваггер<br>
    при помощи `yarn run build:routes`.

---

## Миграции

После любых изменений БД нужно обязательно делать миграцию. <br>
Это такая команда (или группа команд), которые позволяют изменить БД или вернуть в предыдущее состояние.

Перед работой с миграциями нужно обязательно сбилдить приложение:

`yarn run build:full`

### Генерация

Миграции можно генерировать исходя из текущего состояния БД и кодовой базы при помощи команды:

`yarn run migration:generate ./src/migrations/<MigrationName>`

Где `<MigrationName>` - краткое описание изменений в формате PascalCase. Например:<br>

`yarn run migration:generate ./src/migrations/CreateUsersTable`

После выполнения этой команды генерируется файл миграции (если все прошло успешно).<br>
Этот файл нужно импортировать в `src/migrations/migrations.ts` и добавить в конец массива `migrations`.

Если не получилось сгенерировать миграции нужно попытаться пофикисть проблемы.<br>
Если не получается, то надо создать пустую миграцию и собственноручно ее заполнить.<br>
Сделать это можно при помощи команды:

`yarn run migration:create`

### Запуск

После создания миграций нужно запустить миграции при помощи:

`yarn run migration:run`

Запускать можно много раз до момента, пока текст в консоли не перестанет меняться.

В случае, если надо отменить последнюю миграцию используем:

`yarn run migration:revert`
