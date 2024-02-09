import { FC } from "react";
import { StarType } from "./types";
import StarHalf from "src/shared/uikit/StarHalf";
import StarEmpty from "src/shared/uikit/StarEmpty";
import StarFilled from "src/shared/uikit/StarFilled";

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
