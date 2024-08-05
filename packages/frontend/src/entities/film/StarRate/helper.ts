import { StarType } from "../Star/types";

const STARS_COUNT = 5;

const genStarTypeArray = (quantity: number, type: StarType): StarType[] => {
  return new Array(quantity).fill(type);
};

export const getStarsFormRate = (rateCur: number): StarType[] => {
  const stars = rateCur / 2;
  const filledStars = Math.trunc(stars);
  const halfedStars = Math.ceil(stars - filledStars);
  const emptyedStars = STARS_COUNT - (filledStars + halfedStars);

  return [
    ...genStarTypeArray(filledStars, "filled"),
    ...genStarTypeArray(halfedStars, "half"),
    ...genStarTypeArray(emptyedStars, "empty"),
  ];
};
