import { FC } from "react";
import { StarType } from "./types";
import StarHalf from "./StarHalf";
import StarEmpty from "./StarEmpty";
import StarFilled from "./StarFilled";

interface StarProps {
  type: StarType;
}

const Star: FC<StarProps> = ({ type }) => {
  if (type == "half") {
    return <StarHalf size={35} color='#4c86c8' />;
  }
  if (type == "empty") {
    return <StarEmpty size={35} color='#4c86c8' />;
  }
  if (type == "filled") {
    return <StarFilled size={35} color='#4c86c8' />;
  }
  return type;
};

export default Star;
