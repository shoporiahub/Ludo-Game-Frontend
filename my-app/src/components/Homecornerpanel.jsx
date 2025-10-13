// src/components/HomeCornerPanel.jsx
import React from "react";
import Dice3D from "../DiceBox/DiceBox";
import styles from "./HomeCornerPanel.module.css";
import redIcon from "../assets/redIcon.png";
import greenIcon from "../assets/greenIcon.png";
import yellowIcon from "../assets/yellowIcon.png";
import blueIcon from "../assets/blueIcon.png";

const COLOR_ICONS = { red: redIcon, green: greenIcon, yellow: yellowIcon, blue: blueIcon };

function HomeCornerPanel({ color }) {
  const iconSrc = COLOR_ICONS[color];

  return (
    <div className={`${styles.cornerPanel} ${styles[color]}`}>
      <div className={styles.iconWrap}>
        <img src={iconSrc} alt={`${color} home icon`} className={styles.icon} />
      </div>
      <div className={styles.diceWrap}>
        <Dice3D color={color} />
      </div>
    </div>
  );
}

export default HomeCornerPanel;
