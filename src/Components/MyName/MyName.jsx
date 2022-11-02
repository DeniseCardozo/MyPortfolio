import React from "react";
import styles from "./MyName.module.css";


function MyName () {
 return (
     <div className={styles.container}>
        <h1 className={styles.hi}>Denise Cardozo</h1>
        <h3 className={styles.text}>Full Stack - Front End Developer</h3>
     </div>
 )
}

export default MyName;