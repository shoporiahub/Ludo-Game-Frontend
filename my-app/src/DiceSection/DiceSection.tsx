import React from "react";
import styles from './diceSection.module.css'
import DiceWrapper from "../DiceWrapper/DiceWrapper";
import ColorIcon from "../ColorIconBox/ColorIcon";
const Dicesection = () => {
    return (
        <div>
             <div>
                <ColorIcon color="red" imgSrc="" alt="Red Icon" />
            </div>
            <div>
                <DiceWrapper />
            </div>
           
        </div>
    )
}

export default Dicesection;