import React from "react";
import styles from "./AboutMe.module.css";

function AboutMe () {
    return (
        <div  className={styles.container}>
            <h4 className={styles.text}>Let me tell you a little story, about a creative woman. </h4>
            <h4 className={styles.text}>As a child, she drew a lot, invented and created things, she was a being with a lot of imagination. </h4>
            <h4 className={styles.text}>She over time discovered that she could unlock new abilities and get better and better (as if she were in a video game). </h4>
            <h4 className={styles.text}>And she also knew love...</h4>
            <h4 className={styles.text}>She fell in love with the beauty of nature, with adventure, with the way things are designed,</h4>
            <h4 className={styles.text}>and with what she could design and create...</h4>

{/* 
            Sobre una mujer creativa. 
            Que de niña dibujaba mucho, inventaba y creaba cosas, era un ser con mucha imaginación. 
            Ella con el tiempo descubria que podía desbloquear nuevas habilidades y mejorar cada vez más (como si estuviera en un videojuego).
            Y también conoció el amor, 
            se enamoró de lo bello de la naturaleza, de la aventura, de la forma en la que están diseñadas las cosas, 
            y de lo que podría diseñar y crear... */}
        </div>
    )
}

export default AboutMe;