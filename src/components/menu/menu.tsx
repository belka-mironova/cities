import React from "react";
import styles from "./menu.module.scss";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <h1>ГОРОДА</h1>
      <p>
        Маленький проект об изучении российских городов на основе отркрытых
        пространственных данных
      </p>
    </div>
  );
};
