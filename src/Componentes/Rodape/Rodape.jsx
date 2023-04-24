import React from "react";

import linkedin from "./linkedin.png";
import styles from "./Rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://www.linkedin.com/in/samuel-m%C3%BCller-81479b1b5/"
          target="_blank"
          rel="noreferrer"
        >
          <img 
            className={styles["rodape__icones--icone"]}
            src={linkedin} 
            alt="ícone do linkedin" 
          />
        </a>
      </div>
      <p>Desenvolvido por Samuel</p>
    </footer>
  );
}