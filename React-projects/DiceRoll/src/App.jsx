import Dice from "./components/Dice";
import RollButton from "./components/RollButton";
import styles from "./modules/app.module.css";
import { DiceProvider } from "./context/diceContext";

function App() {
  return (
    <>
      <DiceProvider>
        <div className={styles.app}>
          <Dice />
          <RollButton />
        </div>
      </DiceProvider>
    </>
  );
}

export default App;
