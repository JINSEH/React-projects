import { useQuestionContext } from "../context/QuestionContext";
import styles from "../modules/quiz.module.css";

export default function QuizButton() {
  const { isQuiz, setIsQuiz, isFinished } = useQuestionContext();
  function toggleIsQuiz() {
    setIsQuiz(!isQuiz);
  }
  return (
    <div className={styles.quiz}>
      {isFinished ? (
        <></>
      ) : (
        <button onClick={toggleIsQuiz}>
          {isQuiz ? "Add Question!" : "Quiz!"}
        </button>
      )}
    </div>
  );
}
