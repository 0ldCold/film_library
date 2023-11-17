import { getSortedList } from "./sort";

describe("getSortedList", () => {
  test("тестирование сортировки чисел", () => {
    const notSortedValue = [
      {
        id: 3,
      },
      {
        id: 0,
      },
      {
        id: 2,
      },
      {
        id: 1,
      },
    ];

    expect(
      getSortedList(notSortedValue, {
        id: "asc",
      }),
    ).toStrictEqual([
      {
        id: 0,
      },
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
    ]);

    expect(
      getSortedList(notSortedValue, {
        id: "desc",
      }),
    ).toStrictEqual([
      {
        id: 3,
      },
      {
        id: 2,
      },
      {
        id: 1,
      },
      {
        id: 0,
      },
    ]);
  });
});
