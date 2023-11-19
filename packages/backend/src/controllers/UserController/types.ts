import { TPaginationQuery, PaginationQuery } from "src/utils/pagination";
import { ListSortQuery } from "src/utils/sort";
import { ListFilterQuery } from "src/utils/filter";


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



export interface TUsersListRequest extends TPaginationQuery {
  sort?: ListSortQuery<User>;
  filter?: ListFilterQuery<User>;
}
export class UsersListRequest extends PaginationQuery {

}