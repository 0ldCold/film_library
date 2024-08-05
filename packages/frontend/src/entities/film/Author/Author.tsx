import { FC } from "react";
import Image from "next/image";
import Avatar404 from "./404Avatar.png";
import Styles from "./Author.module.scss";

interface AuthorProps {
  name: string;
  roles: string[];
  avatar?: string;
}

const Author: FC<AuthorProps> = ({ name, avatar, roles }) => {
  return (
    <div className={Styles.wrapper}>
      <Image src={avatar ?? Avatar404.src} alt="Автор" width={48} height={75} />
      <div className={Styles.container}>
        <span className={Styles.name}>{name}</span>
        <div className={Styles.row}>
          <div className={Styles.label}>{roles.length == 1 ? "Роль: " : "Роли: "}</div>
          <div className={Styles.rolesContainer}>
            {roles.map((item) => (
              <div key={item} className={Styles.role}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
