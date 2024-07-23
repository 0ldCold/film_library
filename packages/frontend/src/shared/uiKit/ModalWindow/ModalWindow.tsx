import { FC, ReactNode } from 'react';
import Styles from './ModalWindow.module.scss';

interface ModalWindowProps {
  children?: ReactNode;
  onClose?: () => void;
}

const ModalWindow: FC<ModalWindowProps> = ({ children, onClose }) => {
  return (
    <div className={Styles.wrapper} onClick={onClose}>
      <div onClick={(event) => event.stopPropagation()}>{children}</div>
    </div>
  );
};

export default ModalWindow;
