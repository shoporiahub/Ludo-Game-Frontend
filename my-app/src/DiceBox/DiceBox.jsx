import React, { useState } from "react";
import styles from "./dicebox.module.css";

function Dice3D() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const rollDice = () => {
    // add at least 4–5 full rotations
    const extraSpinsX = 1440; 
    const extraSpinsY = 1440;

    // random orientation for final resting
    const baseX = Math.floor(Math.random() * 4) * 90;
    const baseY = Math.floor(Math.random() * 4) * 90;

    // accumulate so it spins every click
    const randX = rotation.x + extraSpinsX + baseX;
    const randY = rotation.y + extraSpinsY + baseY;

    setRotation({ x: randX, y: randY });
  };

  return (
    <div className={styles.container} onClick={rollDice}>
      <div
        className={styles.cube}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 1.3s ease-in-out"
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
