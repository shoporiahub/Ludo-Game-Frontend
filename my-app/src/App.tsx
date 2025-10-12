import styles from './appStyles.module.css'
import LudoBoard from './components/LudoBoard'; 
import DiceBox from './DiceBox/DiceBox';
function App() {
  return (
    <>
      <div className={styles.approot}>
        <div className={styles.boardWrap}>
          <LudoBoard />
          {/* <DiceBox value={3} /> */}
        </div>
      </div>
    </>
  )
}

export default App
