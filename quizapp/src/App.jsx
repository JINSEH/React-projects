import Header from "./components/Header";
import styles from "./modules/app.module.css";
import { QuestionProvider } from "./context/QuestionContext";
import Question from "./components/Question";
import QuizButton from "./components/QuizButton";

function App() {
  return (
    <>
      <QuestionProvider>
        <Header />
        <Question />
        <QuizButton />
      </QuestionProvider>
    </>
  );
}

export default App;
