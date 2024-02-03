import { FC } from "react";
import Author from "src/entities/film/Author/Author";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import { AuthorModuleInfo } from "./types";
import Styles from "./AuthorModule.module.scss";

interface AuthorModuleProps {
  data: AuthorModuleInfo[];
}

const AuthorModule: FC<AuthorModuleProps> = ({ data }) => {
  return (
    <ModuleCard title='Авторы'>
      <div className={Styles.authors}>
        {data.map((author) => (
          <Author key={author.name} name={author.name} avatar={author.avatar} roles={author.role} />
        ))}
      </div>
    </ModuleCard>
  );
};

export default AuthorModule;
