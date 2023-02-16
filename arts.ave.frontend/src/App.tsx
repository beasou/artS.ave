import React, { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { AdicionarArtigo } from "./components/AdicionarArtigo";
import { ArtigosLista } from "./components/ArtigosLista";

import { LinkType } from "./types";

import "./styles/global.css";
import styles from "./App.module.css";
import { FormModal } from "./components/FormModal";

function App() {
  const [links, setLinks] = useState<LinkType[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentEdit, setCurrentEdit] = useState<LinkType | undefined>(undefined)

  useEffect(() => {
    fetch("http://localhost:3003/links")
      .then((response) => response.json())
      .then((data) => {
        setLinks(data.articles);
      });
  }, []);

  function handleAdicionaArtigo(value: LinkType) {
    const newLinks = currentEdit ? 
      links.filter(artigo => artigo.id !== currentEdit.id) : 
      [...links];

    newLinks.push(value);
    setLinks(newLinks);
  }

  function handleDelete(id: string) {
    const newsLinks = links.filter((artigo) => artigo.id != id);
    setLinks(newsLinks);
  }

  function handleUpdate(id: string) {
    const artigo = links.find(link => link.id === id);

    setCurrentEdit(artigo);
    setShowModal(!showModal)
  }

  function resetCurrentEdit() {
    setCurrentEdit(undefined)
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.adicionarArtigo}>
            <AdicionarArtigo onClick={() => setShowModal(!showModal)} />
          </div>
          <ArtigosLista links={links} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        </div>
      </div>
      {showModal ? (
        <FormModal
          onAdd={handleAdicionaArtigo}
          onClose={() => {
            setShowModal(!showModal);
            resetCurrentEdit();
          }}
          valueToEdit={currentEdit}
        />
      ) : null}
    </>
  );
}

export default App;
