import React from "react";
import Dice from "../DiceBox/DiceBox";
import styles from './boardTopSideStyles.module.css'

const BoardTopSide = () => {
    return (
        <div className={styles.topSide}>
            <div className={styles.box}>
                <img src="" alt="" />
            </div>
            <div className={styles.diceBox}>
                <Dice />
            </div>
        </div>
    )
}

export default BoardTopSide;