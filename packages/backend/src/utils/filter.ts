export type ListFilterQuery<T extends object> = {
  [key in keyof T]?: T[key];
};

const checkFiltredType = (value: unknown): boolean => {
  if (typeof value == "object" && !(value instanceof Date)) {
    return false;
  }
  return true;
};

export const getFiltredList = <T extends object>(
  fullList: T[],
  filterRules: ListFilterQuery<T> | undefined,
): T[] => {
  if (
    !filterRules ||
    Object.keys(filterRules).length <= 0 ||
    fullList.length <= 0
  ) {
    return fullList;
  }

  return fullList.filter((item) => {
    const filterKeys = Object.keys(filterRules) as (keyof T)[];

    return !filterKeys.some((key) => {
      const filterValue = filterRules[key];

      const value = item[key];

      if (!checkFiltredType(value)) {
        return true;
      }

      return !String(value)
        .toLowerCase()
        .includes(String(filterValue).toLowerCase());
    });
  });
};
