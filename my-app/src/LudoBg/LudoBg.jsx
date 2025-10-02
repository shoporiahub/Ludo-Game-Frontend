import React from "react";
import styles from './ludobg.module.css';
import LudoBgg from  '../assets/bg.png'
const LudoBg = () => {
    return (
            <img src= {LudoBgg} alt="Ludo Background" className={styles.bgImage} />
    );
};

export default LudoBg;

