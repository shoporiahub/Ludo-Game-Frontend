import React from "react";

import Dice from "../DiceBox/DiceBox";
import styles from './boardBottomSide.module.css'

const BoardBottomSide = () => {
    return (
        <div className={styles.bottomSide}>
            <div className={styles.boxBottom}>
                <img src="" alt="" />
            </div>
            <div className={styles.diceBoxBottom}>
                <Dice />
            </div>
        </div>
    )
}

export default BoardBottomSide;