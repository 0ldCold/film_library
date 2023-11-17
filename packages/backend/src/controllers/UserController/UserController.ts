import {
  JsonController,
  Get,
  Post,
  Param,
  Body,
  NotFoundError,
} from "routing-controllers";
import "reflect-metadata";
import faker from "../../config/faker";
import { User } from "./types";
import {
  PaginationQuery,
  PagitarionResponce,
  getPaginatedData,
} from "../../utils/pagination";
import { getSortedList } from "../../utils/sort";
import { getFiltredList } from "../../utils/filter";
import { UsersListRequest } from "./types";

const getUser = (): User => {
  const id = faker.string.uuid();
  const sex = faker.person.sex() as "female" | "male";
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName(sex);
  const middleName = faker.person.middleName(sex);
  const age = faker.number.int({ min: 8, max: 60 });
  const email = faker.internet.email({
    firstName,
    lastName,
  });
  const country = faker.location.country();
  const city = faker.location.city();
  const address = faker.location.streetAddress({ useFullAddress: true });
  const postalCode = faker.location.zipCode();
  const phone = faker.phone.number();

  return {
    id,
    sex,
    firstName,
    lastName,
    middleName,
    age,
    email,
    country,
    city,
    address,
    postalCode,
    phone,
  };
};

const getUsersList = (count: number): User[] => {
  return new Array(count).fill(null).map(() => getUser());
};

const usersList = getUsersList(97);

@JsonController()
export class UserController {
  @Get("/users/:id")
  getOne(@Param("id") id: string): User | undefined {
    return usersList.find((item) => item.id === id);
  }
  @Post("/users")
  getAll(@Body() query: UsersListRequest): PagitarionResponce<User> {
    const filtredList = getFiltredList(usersList, query.filter);
    const sortedList = getSortedList(filtredList, query.sort);
    const paginatedList = getPaginatedData(sortedList, {
      skip: query.skip,
      take: query.take,
    });

    return paginatedList;
  }
  @Post("/users/edit")
  editUser(@Body() query: User) {
    const findedUserIndex = usersList.findIndex((item) => item.id === query.id);
    if (findedUserIndex < 0) {
      throw new NotFoundError(
        `Пользователь с id=${query.id} не найден, findedUserIndex=${findedUserIndex}, usersList[0].id=${usersList[0].id}`,
      );
    }

    usersList[findedUserIndex] = query;
    return {
      changedId: query.id,
    };
  }
}
