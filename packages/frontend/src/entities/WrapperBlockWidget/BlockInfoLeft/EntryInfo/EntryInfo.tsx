import { FC, ReactNode } from "react";

interface EntryInfoProps {
  children?: ReactNode;
}

const EntryInfo: FC<EntryInfoProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default EntryInfo;
