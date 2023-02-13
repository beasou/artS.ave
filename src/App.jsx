import styles from "./App.module.css";
import { Header } from "./components/Header";
import edit from "./assets/edit.svg";
import trash from "./assets/trash.svg";
import "./global.css";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [links, setLinks] = useState([]);
  const [titleArticle, setTitleArticle] = useState("");
  const [linkArticle, setLinkArticle] = useState("");

  useEffect(() => {
    /**
     * A Promisse pode ser consumida de duas formas
     * 
     * ex 1: 
     * promiseFunction()
     *   .then(callback)
     *   .catch(callback)
     * 
     * ou também pode ser utilziado "async" "await"
     * 
     * ex 2:
     * 
     * try {
     *   const resultado = await promiseFunction();
     * } catch (error) {
     *    // tratar erros
     * }
     * 
     */

    fetch("http://localhost:3003/")
      .then((response) => response.json())
      .then((data) => {
        setLinks(data.articles);
      });
  }, []);

  function handleSubmitLink() {
    /**
     * axios é uma biblioteca que realizar requesições HTTP
     * utilizando os diversos verbos, são eles (GET, POST, DELETE, PUT e outros)
     * O axios trabalha se reproduzindo como uma Promisse
     */
    axios.post('http://localhost:3003/links', {
    titleArticle,
    linkArticle,
    })
      .then((response) => { console.log(response)})
      .catch((error) => { console.error(`Erro ao realizar requisição: ${error}`)})
    console.log("Passei aqui")
    console.log(titleArticle)
    console.log(linkArticle)

  }



  return (
    <>
      <Header />
      <form className={styles.wrapper} onSubmit={handleSubmitLink}>
        <div>
          <label>Digite seu link aqui</label>
          <input
            type="text"
            placeholder="https://exemple.com"
            onChange={(element) => setLinkArticle(element.target.value)}
          />
          <p>Título do artigo</p>
          <input
            type="text"
            placeholder="Digite o titulo aqui"
            onChange={(element) => setTitleArticle(element.target.value)}
          />
        </div>

        <button type="submit" onClick={handleSubmitLink}>
          Salvar
        </button>
      </form>

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
