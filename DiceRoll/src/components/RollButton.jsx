import styles from "../modules/rollbutton.module.css";
import { useDiceContext } from "../context/diceContext";

export default function RollButton() {
  const { rollDice } = useDiceContext();
  return (
    <div className={styles.buttoncontainer}>
      <button className={styles.rollbutton} onClick={rollDice}>
        Roll Dice!
      </button>
    </div>
  );
}
