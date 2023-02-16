import React from "react";

import { LinkType } from "../../types";

import edit from "../../assets/edit.svg";
import trash from "../../assets/trash.svg";

import styles from "./index.module.css";

type ArtigosListaProps = {
  links: LinkType[];
  handleDelete: (id: string) => void;
  handleUpdate: (id: string) => void;
};

export function ArtigosLista({ links, handleDelete, handleUpdate }: ArtigosListaProps): React.ReactElement {
  return (
    <>
      <div className={styles.article}>
        <h1>Artigos</h1>
        <hr />

        {links.map((link) => (
          <li key={link.id}>
            <div>
              <div><strong>{link.titulo}</strong></div>
              <a href={link.URL}>{link.URL}</a>
            </div>
            <div>
              <img src={edit} onClick={() => handleUpdate(link.id)} alt="Editar" />
              <img src={trash} onClick={() => handleDelete(link.id)} alt="Excluir" />
            </div>
          </li>
        ))}
      </div>
    </>
  );
}
