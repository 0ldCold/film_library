import { BackendResponseWrapper } from "src/shared/api/types";

export const getResponseData = async <T>(
  response: Promise<BackendResponseWrapper<T>>,
): Promise<T> => (await response).data;
