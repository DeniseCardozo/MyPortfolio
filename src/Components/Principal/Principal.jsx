import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./Principal.module.css";
import sky from '../../Images/sky.jpg';
import moon from "../../Images/moon.png";
import Flower0 from "../../Images/Flower0.png";
import Flower1 from "../../Images/Flower1.png";
import Flower5 from "../../Images/Flower5.png";
import Flower6 from "../../Images/Flower7.jpg";
import moths from "../../Images/moths.png";


import MyName from "../MyName/MyName";
import AboutMe from "../AboutMe/AboutMe";
import AboutMe2 from "../AboutMe/AboutMe2";

function Principal () {
 return (
     <div className={styles.container}>
         <Parallax pages={7}>
            
             <ParallaxLayer 
                 offset={0}
                 factor={2.5}
                 style={{
                     backgroundImage: `url(${sky})`,
                     backgroundSize: "cover",
                 }} />

             <ParallaxLayer 
                 offset={0}
                 sticky={{ start: 0, end: 0.5 }}
             >
                <div>
                    <img src={moon} alt="moon" className={styles.moon} />
                </div> 
             </ParallaxLayer>

             <ParallaxLayer 
                offset={0.3}
                speed={-0.2}
            >
                <div className={styles.box3}>
                <AboutMe />
                </div>

            </ParallaxLayer>




            <ParallaxLayer 
                 offset={2}
                 factor={1.5}
                 style={{
                    backgroundImage: `url(${Flower6})`,
                    backgroundSize: "cover",
                 }}
            />

             <ParallaxLayer 
                offset={1} 
                speed={0.4}
             >
                <div className={styles.box2}>
                    <img src={Flower0} alt="flower0" />
                </div>   
            </ParallaxLayer>
            
             <ParallaxLayer 
                offset={1.2}
                speed={0.5}
            >
                <MyName />
             </ParallaxLayer>





                   
            <ParallaxLayer 
                offset={1.75}
                speed={0.6}
            >
                <div className={styles.box2}>
                    {/* <img src={Flower2} alt="flower2" className={styles.flower2} /> */}
                    <img src={Flower5} alt="flower5" className={styles.flower5} />
                </div>
            </ParallaxLayer>



            <ParallaxLayer 
                offset={1.3} 
                speed={0.6}
            >
                <div className={styles.box1}>
                    <img src={Flower1} alt="flower1" className={styles.flower1} />
                </div>
            </ParallaxLayer>


            


         </Parallax>
     </div>
 )
}

export default Principal;