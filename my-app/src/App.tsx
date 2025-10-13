import styles from './appStyles.module.css';
import LudoBoard from './components/LudoBoard';
import HomeCornerPanel from './components/Homecornerpanel.jsx';

function App() {
  return (
    <div className={styles.approot}>
      <div className={styles.boardWrap}>
        <LudoBoard />

        {/* Corner Panels — each aligned to board corners */}
        <div className={`${styles.cornerPanel} ${styles.topLeft}`}>
          <HomeCornerPanel color="red" />
        </div>

        <div className={`${styles.cornerPanel} ${styles.topRight}`}>
          <HomeCornerPanel color="green" />
        </div>

        <div className={`${styles.cornerPanel} ${styles.bottomRight}`}>
          <HomeCornerPanel color="yellow" />
        </div>

        <div className={`${styles.cornerPanel} ${styles.bottomLeft}`}>
          <HomeCornerPanel color="blue" />
        </div>
      </div>
    </div>
  );
}

export default App;
