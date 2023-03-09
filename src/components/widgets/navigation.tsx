import React from "react";
import { Selector } from "./selector";
import styles from "./navigation.module.scss"


export const Navigation = () => {
  

  return (
    <div className={styles.navigation}>
    <Selector type="city" />
    <Selector type="layers" />
    </div>
  );
};
