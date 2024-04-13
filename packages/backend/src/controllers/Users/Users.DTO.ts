export interface UsersDTO {
  id: number
  firstName: string
  lastName: string
  email: string
}

export type UserCreationParams = Pick<UsersDTO, "firstName" | "lastName" | "email">
