import React from "react";
import styles from './diceWrapper.module.css'
import Dice from "../DiceBox/DiceBox";
const DiceWrapper = () => {
    return (
        <div className={styles.diceWrapper}>
            <div className={styles.diceBoxHolder}>
                <Dice />
            </div>
        </div>
    )
}

export default DiceWrapper; 