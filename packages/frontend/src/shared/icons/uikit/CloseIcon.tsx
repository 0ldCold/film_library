import { FC } from 'react';
import { IconProps } from './types';

const CloseIcon: FC<IconProps> = ({ size, color = 'inherit' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="1 -1 27 27"
      width={size}
      fill={'currentColor'}
      color={color}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
  );
};

export default CloseIcon;
