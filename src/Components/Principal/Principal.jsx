import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./Principal.module.css";
import sky from '../../Images/LayerSky.png';
import stars from '../../Images/LayerStars.png';
import Flower0 from "../../Images/Flower0.png";
import Flower1 from "../../Images/Flower1.png";
import Flower2 from "../../Images/Flower2.png";
import Flower3 from "../../Images/Flower3.png";


function Principal () {
 return (
     <div className={styles.container}>
         <Parallax pages={7}>
             <ParallaxLayer 
                 offset={0}
                 style={{
                     backgroundImage: `url(${sky})`,
                     backgroundSize: "cover",
                 }} />
            
            <ParallaxLayer 
                offset={0} 
                speed={0.3}
                style={{
                     backgroundImage: `url(${stars})`,
                     backgroundSize: "cover",
                 }} />

             <ParallaxLayer 
                offset={0} 
                speed={0.4}
                factor={1.5}
                style={{
                    backgroundImage: `url(${Flower0})`,
                    backgroundSize: "cover",
                }} />
            
             <ParallaxLayer 
                offset={0.5}
                speed={0.05}>
                    <h1>Welcome to my porfolio!</h1>
             </ParallaxLayer>

            <ParallaxLayer 
                offset={0.3} 
                speed={0.6}
            >
                <div className={styles.box1}>
                    <img src={Flower1} alt="layer1" className={styles.flower1} />
                </div>
            </ParallaxLayer>
                   
            <ParallaxLayer 
                offset={0.4} 
                speed={0.6}
            >
                <div className={styles.box2}>
                    <img src={Flower2} alt="layer1" className={styles.flower2} />
                    <img src={Flower3} alt="layer1" className={styles.flower3} />
                </div>
            </ParallaxLayer>

            {/* <ParallaxLayer 
                offset={0.9} 
                speed={0.6}
            >
                <div className={styles.box3}>
                   
                </div>
            </ParallaxLayer> */}

         </Parallax>
     </div>
 )
}

export default Principal;