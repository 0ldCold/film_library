import { FC, ReactNode } from 'react';
import Styles from './Typography.module.scss';
import { useAppSelector } from 'src/shared/store/hooks';
import { clsx } from 'clsx';

interface TypographyProps {
  className?: string;
  isWithoutDarkTheme?: boolean;
  children?: ReactNode;
}

const Typography: FC<TypographyProps> = ({ className, isWithoutDarkTheme, children }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={clsx(className, theme === 'dark' && !isWithoutDarkTheme && Styles.dark)}>
      {children}
    </div>
  );
};

export default Typography;
