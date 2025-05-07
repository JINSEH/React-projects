import { useChoiceContext } from "../context/ChoiceContext";
import styles from "../modules/choices.module.css";

export default function Choices() {
  const { playerChoice, compChoice } = useChoiceContext();
  return (
    <div className={styles.choices}>
      <p>Your Choice: {playerChoice}</p>
      <p>Computer's Choice: {compChoice}</p>
    </div>
  );
}
