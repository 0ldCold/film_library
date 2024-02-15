import { FC } from "react";

interface DescriptionProps {
  text: string;
}
//TODO:Заняться модулем "Описание"
const Description: FC<DescriptionProps> = ({ text }) => {
  return <span>{text}</span>;
};

export default Description;
