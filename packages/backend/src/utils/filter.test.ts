import { getFiltredList } from "./filter";

interface TestType {
  id: string;
  name: string;
  age: number;
}

describe("getFiltredList", () => {
  const baseList: TestType[] = [
    {
      id: "1",
      name: "Ильям",
      age: 24,
    },
    {
      id: "2",
      name: "Дима",
      age: 25,
    },
    {
      id: "3",
      name: "Кирилл",
      age: 24,
    },
  ];

  test("тестирование по одному условию", () => {
    expect(
      getFiltredList(baseList, {
        name: "Ильям",
      }),
    ).toStrictEqual([
      {
        id: "1",
        name: "Ильям",
        age: 24,
      },
    ]);

    expect(
      getFiltredList(baseList, {
        name: "и",
      }),
    ).toStrictEqual(baseList);

    expect(
      getFiltredList(baseList, {
        age: 2,
      }),
    ).toStrictEqual(baseList);

    expect(
      getFiltredList(baseList, {
        age: 4,
      }),
    ).toStrictEqual([
      {
        id: "1",
        name: "Ильям",
        age: 24,
      },
      {
        id: "3",
        name: "Кирилл",
        age: 24,
      },
    ]);
  });

  test("тестирование по нескольким условиям", () => {
    expect(
      getFiltredList(baseList, {
        name: "м",
        age: 4,
      }),
    ).toStrictEqual([
      {
        id: "1",
        name: "Ильям",
        age: 24,
      },
    ]);
  });
});
