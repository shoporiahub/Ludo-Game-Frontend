// src/DiceBox/Dice3D.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rollDice } from "../Store/DiceSlice";
import { nextTurn } from "../Store/TurnSlice";
import styles from "./dicebox.module.css";

function Dice3D({ color }) {
  const dispatch = useDispatch();
  const currentPlayer = useSelector((state) => state.turn.currentPlayer);
  const tokens = useSelector((state) => state.tokens);
  const diceValue = useSelector((state) => state.dice.value);

  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Hide dice if it's not this player's turn
  if (currentPlayer !== color) return null;

  const handleRoll = () => {
    // --- Generate dice roll ---
    const roll = Math.floor(Math.random() * 6) + 1;

    // Dispatch roll to Redux
    dispatch(rollDice(roll));

    // --- Spin animation ---
    const extraSpinsX = 1440;
    const extraSpinsY = 1440;
    const baseX = Math.floor(Math.random() * 4) * 90;
    const baseY = Math.floor(Math.random() * 4) * 90;
    setRotation({ x: rotation.x + extraSpinsX + baseX, y: rotation.y + extraSpinsY + baseY });

    // --- Check if player can move after animation --- 
    setTimeout(() => {
      const playerTokens = tokens[currentPlayer];
      const canMove = playerTokens.some(
        (t) => (t.status === "home" && roll === 6) || t.status === "active"
      );
      console.log("wwww",currentPlayer,roll);
      
      // If no token can move, skip turn    
      if (!canMove) {
        dispatch(nextTurn());
      }
    }, 1500);
  };

  // --- Map diceValue to cube rotation for correct face ---
  // Each face of cube needs rotationX/Y to show that face
  const faceRotations = {
    1: { x: 0, y: 0 },
    2: { x: -90, y: 0 },
    3: { x: 0, y: 90 },
    4: { x: 0, y: -90 },
    5: { x: 90, y: 0 },
    6: { x: 180, y: 0 },
  };

  const currentRotation = faceRotations[diceValue] || { x: 0, y: 0 };

  return (
    <div className={styles.container} onClick={handleRoll}>
      <div
        className={styles.cube}
        style={{
          transform: `rotateX(${rotation.x + currentRotation.x}deg) rotateY(${rotation.y + currentRotation.y}deg)`,
          transition: "transform 1.3s ease-in-out",
        }}
      >
        {/* Dice Faces */}
        <div className={`${styles.face} ${styles.front}`}><span className={styles.dot}></span></div>
        <div className={`${styles.face} ${styles.back}`}><span className={`${styles.dot} ${styles.topLeft}`}></span><span className={`${styles.dot} ${styles.bottomRight}`}></span></div>
        <div className={`${styles.face} ${styles.right}`}><span className={`${styles.dot} ${styles.topLeft}`}></span><span className={styles.dot}></span><span className={`${styles.dot} ${styles.bottomRight}`}></span></div>
        <div className={`${styles.face} ${styles.left}`}><span className={`${styles.dot} ${styles.topLeft}`}></span><span className={`${styles.dot} ${styles.topRight}`}></span><span className={`${styles.dot} ${styles.bottomLeft}`}></span><span className={`${styles.dot} ${styles.bottomRight}`}></span></div>
        <div className={`${styles.face} ${styles.top}`}><span className={`${styles.dot} ${styles.topLeft}`}></span><span className={`${styles.dot} ${styles.topRight}`}></span><span className={styles.dot}></span><span className={`${styles.dot} ${styles.bottomLeft}`}></span><span className={`${styles.dot} ${styles.bottomRight}`}></span></div>
        <div className={`${styles.face} ${styles.bottom}`}><span className={`${styles.dot} ${styles.topLeft}`}></span><span className={`${styles.dot} ${styles.topRight}`}></span><span className={`${styles.dot} ${styles.middleLeft}`}></span><span className={`${styles.dot} ${styles.middleRight}`}></span><span className={`${styles.dot} ${styles.bottomLeft}`}></span><span className={`${styles.dot} ${styles.bottomRight}`}></span></div>
      </div>
    </div>
  );
}

export default Dice3D;
