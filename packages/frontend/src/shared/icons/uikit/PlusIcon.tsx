import { FC } from "react";
import { IconProps } from "./types";

const PlusIcon: FC<IconProps> = ({ size, color = "inherit" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="1 0 25 25"
      width={size}
      fill={"currentColor"}
      color={color}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  );
};

export default PlusIcon;
