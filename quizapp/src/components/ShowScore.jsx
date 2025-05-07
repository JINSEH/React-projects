import { useQuestionContext } from "../context/QuestionContext";
import styles from "../modules/showscore.module.css";

export default function ShowScore({ setI }) {
  const { score, setIsFinished, isFinished, setIsQuiz, isQuiz, setScore } =
    useQuestionContext();
  function handleRetry() {
    setI(0);
    setScore(0);
    setIsFinished(!isFinished);
  }

  function handleAdd() {
    setI(0);
    setScore(0);
    setIsFinished(!isFinished);
    setIsQuiz(!isQuiz);
  }

  return (
    <div className={styles.showscore}>
      Your Score: {score}
      <div className={styles.button}>
        <button onClick={handleRetry}>Retry?</button>
        <button onClick={handleAdd}>Add Questions?</button>
      </div>
    </div>
  );
}
