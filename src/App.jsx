import styles from "./App.module.css";
import { Header } from "./components/Header";
import "./global.css";

function App() {
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
        </div>

        <button>Salvar</button>
      </div>
      <p className={styles.linkSave}>
        <a href="#">Clique aqui para visualizar os links salvos</a>
      </p>
    </>
  );
}

export default App;
