import { useEffect, useState } from "react";
import styles from "../modules/question.module.css";
import { useQuestionContext } from "../context/QuestionContext";

export default function Question() {
  const { setQuestionList, question, setQuestion, questionList } =
    useQuestionContext();
  const [answers, setAnswers] = useState([
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
  ]);

  //Function to handle which answers are correct
  function toggleCorrect(index) {
    const newAnswers = [...answers];
    newAnswers[index].isCorrect = !newAnswers[index].isCorrect;
    setAnswers(newAnswers);
  }

  function handleAnswerInput(index, value) {
    const newAnswers = [...answers];
    newAnswers[index].text = value;
    setAnswers(newAnswers);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { question, answers };
    setQuestionList([...questionList, newItem]);
    setQuestion("");
    setAnswers([
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
    ]);
  }

  useEffect(() => {
    localStorage.setItem("questionList", JSON.stringify(questionList));
    console.log(questionList);
  }, [questionList]);

  return (
    <div>
      <form className={styles.question} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question">What is your question?</label>
          <input
            type="text"
            name="question"
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
          />
        </div>
        <p>
          Give 4 possible answers to the question and select the correct
          answer/answers
        </p>
        {answers.map((answer, index) => (
          <div key={index}>
            <label>{index + 1}: </label>
            <input
              type="text"
              onChange={(e) => handleAnswerInput(index, e.target.value)}
              value={answer.text}
            />
            <input
              type="checkbox"
              onChange={() => toggleCorrect(index)}
              checked={answer.isCorrect}
            />
          </div>
        ))}
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
