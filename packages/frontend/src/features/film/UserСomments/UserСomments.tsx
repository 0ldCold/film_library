import { FC } from "react";
import Styles from "./UserСomments.module.scss";
import CommentIcon from "src/shared/uikit/CommentIcon";
import EmptyCommentIcon from "src/shared/uikit/EmptyCommentIcon";
import FeatherIcons from "src/shared/uikit/FeatherIcons";
import GearsIcon from "src/shared/uikit/GearsIcon";

const UserСomments: FC = () => {
  return (
    <div className={Styles.iconsPictures}>
      <div>
        <CommentIcon size={10} color='#444' />{" "}
        <div>
          <EmptyCommentIcon size={10} color='#444' />
        </div>
        <div>
          <FeatherIcons size={10} color='#444' />
        </div>
        <div>
          <GearsIcon size={10} color='#444' />
        </div>
      </div>
    </div>
  );
};

export default UserСomments;
