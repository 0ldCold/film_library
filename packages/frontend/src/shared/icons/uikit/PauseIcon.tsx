import { FC } from "react";
import { IconProps } from "./types";

const PauseIcon: FC<IconProps> = ({ size, color = "inherit" }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={size}
      viewBox='0 0 28 28'
      width={size}
      fill={"currentColor"}
      color={color}
    >
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M6 19h4V5H6v14zm8-14v14h4V5h-4z' />
    </svg>
  );
};
export default PauseIcon;
