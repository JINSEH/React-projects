import Header from "./components/Header";
import styles from "./modules/app.module.css";
import { QuestionProvider } from "./context/QuestionContext";
import Question from "./components/Question";
import QuizButton from "./components/QuizButton";
import Quiz from "./components/Quiz";

function App() {
  return (
    <>
      <QuestionProvider>
        <Header />
        <Quiz />
        <QuizButton />
      </QuestionProvider>
    </>
  );
}

export default App;
