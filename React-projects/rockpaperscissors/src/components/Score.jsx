import { useChoiceContext } from "../context/ChoiceContext";
import styles from "../modules/score.module.css";

export default function Score() {
  const { score } = useChoiceContext();
  return (
    <div className={styles.score}>
      <p>Your Score: {score.playerScore}</p>
      <p>Computer Score: {score.compScore}</p>
      <p>{score.result}</p>
    </div>
  );
}
