import styles from './appStyles.module.css'
import LudoBoard from './components/LudoBoard'; 

function App() {
  return (
    <>
      <div className={styles.approot}>
        <div className={styles.boardWrap}>
          <LudoBoard />
        </div>
      </div>
    </>
  )
}

export default App
