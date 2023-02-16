import React from "react";

import styles from "./index.module.css";

import logo from "../../assets/logo.svg";

export function Header(): React.ReactElement {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <strong>
          art<span>S.ave</span>
        </strong>
      </div>
    </header>
  );
}
