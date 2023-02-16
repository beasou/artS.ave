import React from "react";

import styles from './index.module.css'

type AdicionarArtigoProps = {
  onClick: () => void;
}

export function AdicionarArtigo({ onClick }: AdicionarArtigoProps): React.ReactElement {
  return <button className={styles.container} onClick={onClick}>Adicionar Artigo</button>;
}
