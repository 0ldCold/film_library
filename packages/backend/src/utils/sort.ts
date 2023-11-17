export type SortVariant = "asc" | "desc";

export type ListSortQuery<T extends object> = {
  [key in keyof T]?: SortVariant;
};

const checkSortedType = (value: unknown): boolean => {
  if (typeof value == "object" && !(value instanceof Date)) {
    return false;
  }
  return true;
};

export const getSortedList = <T extends object>(
  fullList: T[],
  sortRules: ListSortQuery<T> | undefined,
): T[] => {
  if (
    !sortRules ||
    Object.keys(sortRules).length <= 0 ||
    fullList.length <= 0
  ) {
    return fullList;
  }

  const firstSortRuleKey = Object.keys(sortRules)[0] as keyof T;
  const firstSortRuleValue = sortRules[firstSortRuleKey] as
    | SortVariant
    | undefined;
  if (!firstSortRuleValue) {
    return fullList;
  }

  return fullList.toSorted((a, b) => {
    const aValue = a[firstSortRuleKey];
    const bValue = b[firstSortRuleKey];

    if (!checkSortedType(aValue) || !checkSortedType(bValue)) {
      return 0;
    }

    if (aValue == bValue) {
      return 0;
    }

    if (firstSortRuleValue == "asc") {
      return aValue > bValue ? 1 : -1;
    }
    if (firstSortRuleValue == "desc") {
      return aValue < bValue ? 1 : -1;
    }
    return 0;
  });
};
