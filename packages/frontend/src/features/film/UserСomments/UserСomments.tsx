import { FC } from 'react';
import Styles from './UserСomments.module.scss';
import FeatherIcons from 'src/shared/icons/uikit/FeatherIcons';
import GearsIcon from 'src/shared/icons/uikit/GearsIcon';
import StarIcons from 'src/shared/icons/uikit/StarIcons';
import CommentIcon from 'src/shared/icons/uikit/CommentIcon';
import ReviewIcon from 'src/shared/icons/uikit/ReviewIcon';
import { useAppSelector } from 'src/shared/store/hooks';

const UserComments: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const color = theme === 'light' ? '#444' : '#fff';
  return (
    <div className={Styles.iconsPictures}>
      <CommentIcon size={19} color={color} />
      <ReviewIcon size={19} color={color} />
      <FeatherIcons size={19} color={color} />
      <StarIcons size={19} color={color} />
      <GearsIcon size={19} color={color} />
    </div>
  );
};

export default UserComments;
