import { FC } from 'react';
import { IconProps } from './types';

const StarIcons: FC<IconProps> = ({ size, color = 'inherit' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill="currentColor"
      color={color}
    >
      <path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" />
    </svg>
  );
};

export default StarIcons;
