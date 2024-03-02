import { FC } from "react";
import Styles from "./UserСomments.module.scss";
import FeatherIcons from "src/shared/icons/uikit/FeatherIcons";
import GearsIcon from "src/shared/icons/uikit/GearsIcon";
import StarIcons from "src/shared/icons/uikit/StarIcons";
import CommentIcon from "src/shared/icons/uikit/CommentIcon";
import ReviewIcon from "src/shared/icons/uikit/ReviewIcon";

const UserСomments: FC = () => {
  return (
    <div className={Styles.iconsPictures}>
      <CommentIcon size={19} color='#444' />
      <ReviewIcon size={19} color='#444' />
      <FeatherIcons size={19} color='#444' />
      <StarIcons size={19} color='#444' />
      <GearsIcon size={19} color='#444' />
    </div>
  );
};

export default UserСomments;
