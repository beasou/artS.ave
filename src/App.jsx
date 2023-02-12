import styles from "./App.module.css";
import { Header } from "./components/Header";
import edit from "./assets/edit.svg";
import trash from "./assets/trash.svg";
import "./global.css";

import { useEffect, useState } from "react";

function App() {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3003/")
      .then((response) => response.json())
      .then((data) => {
        setLinks(data.articles);
      });
  }, []);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div>
          <p>Digite seu link aqui</p>
          <input
            type="text"
            name="nome"
            value=""
            placeholder="https://exemple.com"
          />
          <p>Título do artigo</p>
          <input
            type="text"
            name="nome"
            value=""
            placeholder="Digite o titulo aqui"
          />
        </div>

        <button type="submit">Salvar</button>
      </div>
      <p className={styles.linkSave}>
        <a href="#">Clique aqui para visualizar os links salvos</a>
      </p>
      <div className={styles.article}>
        <h1>Artigos</h1>
        <hr />
        {links.map((link) => (
          <li key={link.id}>
            <div>
              <strong>{link.titulo}</strong>
              <a href={link.URL}>{link.URL}</a>
            </div>
            <div>
              <img src={edit} alt="Editar" />
              <img src={trash} alt="Excluir" />
            </div>
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
