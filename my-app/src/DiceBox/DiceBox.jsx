// src/DiceBox/Dice3D.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rollDice } from "../Store/DiceSlice";
import { nextTurn } from "../Store/TurnSlice";
import styles from "./dicebox.module.css";

function Dice3D({ color }) {
  const dispatch = useDispatch();
  const currentPlayer = useSelector((state) => state.turn.currentPlayer);
  const diceValue = useSelector((state) => state.dice.value);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // hide dice if it's not this player's turn
  if (currentPlayer !== color) return null;

  const handleRoll = () => {
    // roll the dice (redux updates diceValue)
    dispatch(rollDice());

    // spin animation
    const extraSpinsX = 1440;
    const extraSpinsY = 1440;
    const baseX = Math.floor(Math.random() * 4) * 90;
    const baseY = Math.floor(Math.random() * 4) * 90;
    const randX = rotation.x + extraSpinsX + baseX;
    const randY = rotation.y + extraSpinsY + baseY;
    setRotation({ x: randX, y: randY });

    // switch turn after dice settles
    setTimeout(() => {
      dispatch(nextTurn());
    }, 1500);
  };

  return (
    <div className={styles.container} onClick={handleRoll}>
      <div
        className={styles.cube}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 1.3s ease-in-out",
        }}
      >
        {/* Face 1 */}
        <div className={`${styles.face} ${styles.front}`}>
          <span className={styles.dot}></span>
        </div>

        {/* Face 2 */}
        <div className={`${styles.face} ${styles.back}`}>
          <span className={`${styles.dot} ${styles.topLeft}`}></span>
          <span className={`${styles.dot} ${styles.bottomRight}`}></span>
        </div>

        {/* Face 3 */}
        <div className={`${styles.face} ${styles.right}`}>
          <span className={`${styles.dot} ${styles.topLeft}`}></span>
          <span className={styles.dot}></span>
          <span className={`${styles.dot} ${styles.bottomRight}`}></span>
        </div>

        {/* Face 4 */}
        <div className={`${styles.face} ${styles.left}`}>
          <span className={`${styles.dot} ${styles.topLeft}`}></span>
          <span className={`${styles.dot} ${styles.topRight}`}></span>
          <span className={`${styles.dot} ${styles.bottomLeft}`}></span>
          <span className={`${styles.dot} ${styles.bottomRight}`}></span>
        </div>

        {/* Face 5 */}
        <div className={`${styles.face} ${styles.top}`}>
          <span className={`${styles.dot} ${styles.topLeft}`}></span>
          <span className={`${styles.dot} ${styles.topRight}`}></span>
          <span className={styles.dot}></span>
          <span className={`${styles.dot} ${styles.bottomLeft}`}></span>
          <span className={`${styles.dot} ${styles.bottomRight}`}></span>
        </div>

        {/* Face 6 */}
        <div className={`${styles.face} ${styles.bottom}`}>
          <span className={`${styles.dot} ${styles.topLeft}`}></span>
          <span className={`${styles.dot} ${styles.topRight}`}></span>
          <span className={`${styles.dot} ${styles.middleLeft}`}></span>
          <span className={`${styles.dot} ${styles.middleRight}`}></span>
          <span className={`${styles.dot} ${styles.bottomLeft}`}></span>
          <span className={`${styles.dot} ${styles.bottomRight}`}></span>
        </div>
      </div>
    </div>
  );
}

export default Dice3D;
