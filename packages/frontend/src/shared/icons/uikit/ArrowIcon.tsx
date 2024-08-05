import { FC } from 'react';
import { IconProps } from './types';

const ArrowIcon: FC<IconProps> = ({ size, color = 'inherit' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill={'currentColor'}
      color={color}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7 10l5 5 5-5H7z" />
    </svg>
  );
};

export default ArrowIcon;
