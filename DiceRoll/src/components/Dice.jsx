import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../modules/dice.module.css";
import { useDiceContext } from "../context/diceContext";

export default function Dice() {
  const { diceOne, diceTwo } = useDiceContext();
  return (
    <div className={styles.diceContainer}>
      <FontAwesomeIcon className={styles.dice} icon={diceOne} />
      <FontAwesomeIcon className={styles.dice} icon={diceTwo} />
    </div>
  );
}
