import { FC } from "react";
import MainTemplate from "src/widgets/template/MainTemplate/MainTemplate";
import { useGetUsersList } from "src/shared/api/users/hooks/useGetUsersList";
import styles from "./Users.module.scss";
import Link from "next/link";
import { useRemoveUser } from "src/shared/api/users/hooks/useRemoveUser";

const Users: FC = () => {
  const { data } = useGetUsersList();
  const { mutate: removeUser } = useRemoveUser();

  const handleRemove = (id: number) => {
    removeUser(id);
  };

  if (!data) {
    return <MainTemplate>Loading...</MainTemplate>;
  }
  return (
    <MainTemplate>
      <div className={styles.usersGrid}>
        {data.map((item) => (
          <div className={styles.row} key={item.id}>
            <Link href={`/users/${item.id}`}>{`${item.firstName} ${item.lastName}`}</Link>
            <button onClick={() => handleRemove(item.id)}>Удалить</button>
          </div>
        ))}
      </div>
    </MainTemplate>
  );
};
export default Users;
