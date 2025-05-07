import { createContext, useContext, useState, useMemo } from "react";

const QuestionContext = createContext();

export function QuestionProvider({ children }) {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState("");
  const [isQuiz, setIsQuiz] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [questionList, setQuestionList] = useState(() => {
    const saved = localStorage.getItem("questionList");
    const convertedData = JSON.parse(saved);
    return convertedData || [];
  });

  const value = useMemo(
    () => ({
      question,
      setQuestion,
      questionList,
      setQuestionList,
      score,
      setScore,
      isQuiz,
      setIsQuiz,
      isFinished,
      setIsFinished,
    }),
    [question, questionList, score, isQuiz, isFinished]
  );
  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
}

export function useQuestionContext() {
  const context = useContext(QuestionContext);
  return context;
}
