export const isExist = <T>(data: T | null | undefined): data is T =>
  data !== undefined && data !== null;
