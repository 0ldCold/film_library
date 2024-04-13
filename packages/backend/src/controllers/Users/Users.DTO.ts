import type {UsersEntity} from "src/entities/Users/Users.entity";

export interface UsersDTO extends UsersEntity {
  id: number
  firstName: string
  lastName: string
  email: string
}

export type UserCreationParams = Pick<UsersDTO, "firstName" | "lastName" | "email">
