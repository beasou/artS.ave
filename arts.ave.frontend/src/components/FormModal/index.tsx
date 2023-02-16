import React, { useRef } from "react";
import { v4 as generatorId } from 'uuid'

import { LinkType } from "../../types";

import styles from "./index.module.css";

type FormModalProps = {
  onClose: () => void;
  onAdd: (value: LinkType) => void;
  valueToEdit: LinkType | undefined;
};

export function FormModal({
  onClose,
  onAdd,
  valueToEdit,
}: FormModalProps): React.ReactElement {
  const campoTitulo = useRef(null);
  const campoLink = useRef(null);

  const handleClick = () => {
    if (campoLink && campoTitulo) {
      const linkValue = campoLink.current?.value;
      const tituloValue = campoTitulo.current?.value;

      if (!tituloValue || !linkValue) {
        alert("Preencha todos os campos!")
      } else {
        onAdd({
          id: valueToEdit ? valueToEdit.id : generatorId(),
          titulo: tituloValue,
          URL: linkValue
        })

        onClose();
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <button onClick={onClose} className={styles.close}>
          x
        </button>
        <div>
          <div className={styles.formField}>
            <label>Título do artigo:</label>
            <input
              ref={campoTitulo}
              type="text"
              placeholder="Digite o titulo aqui"
              defaultValue={valueToEdit ? valueToEdit.titulo : ''}
            />
          </div>
          <div className={styles.formField}>
            <label>Digite seu link aqui:</label>
            <input
              ref={campoLink}
              type="text"
              placeholder="https://exemple.com"
              defaultValue={valueToEdit ? valueToEdit.URL : ''}
            />
          </div>
        </div>

        <button
          onClick={handleClick}
        >
          Salvar
        </button>
      </div>
    </div>
  );
}
