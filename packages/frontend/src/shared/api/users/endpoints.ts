import { BackendResponseWrapper } from "src/shared/api/types";
import { instance } from "src/shared/api/instance";

export const getUsers = (): Promise<BackendResponseWrapper<Components.Schemas.UsersDTO[]>> => {
  return instance.get("users");
};
export const removeUser = (userId: number): Promise<BackendResponseWrapper<void>> => {
  return instance.delete(`users/${userId}`);
};
