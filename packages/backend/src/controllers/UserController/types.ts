import { PaginationQuery } from "../../utils/pagination";
import { ListSortQuery } from "../../utils/sort";
import { ListFilterQuery } from "../../utils/filter";

export interface User {
  id: string;
  sex: string;
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  age: number;
}

export interface UsersListRequest extends PaginationQuery {
  sort?: ListSortQuery<User>;
  filter?: ListFilterQuery<User>;
}
