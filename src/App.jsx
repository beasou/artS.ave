import styles from "./App.module.css";
import { Header } from "./components/Header";
import "./global.css";

import { useEffect, useState } from "react";

function App() {
  
  const [links, setLinks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3003/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.articles);
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
    </>
  );
}

export default App;
