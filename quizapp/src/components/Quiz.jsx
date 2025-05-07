import { useQuestionContext } from "../context/QuestionContext";
import Question from "./Question";
import ShowQuestion from "./ShowQuestion";

export default function Quiz() {
  const { isQuiz } = useQuestionContext();
  return <div>{isQuiz ? <ShowQuestion /> : <Question />}</div>;
}
