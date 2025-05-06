import { useState } from "react";
import { useQuestionContext } from "../context/QuestionContext";

export default function ShowQuestion() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const { questionList, setScore, score } = useQuestionContext();
  let i = 0;

  function handleRadioChange(e) {
    const value = e.target.value;
    setSelectedAnswer(value);
  }

  function handleSubmit(e, i) {
    e.preventDefault();
    const answerArray = questionList[i].answers;
    const correctAnswerObject = answerArray.filter(
      (answer) => answer.isCorrect
    );
    const correctAnswer = correctAnswerObject[0].text;
    if (selectedAnswer == correctAnswer) {
      setScore(score + 1);
    }
    i++;
  }

  return (
    <>
      <h2>Question {i + 1}</h2>
      <h3>{questionList[i].question}</h3>
      {questionList[i].answers.map((answer) => (
        <input
          type="radio"
          name="answers"
          value={answer.text}
          checked={selectedAnswer === answer.text}
          onChange={handleRadioChange}
        />
      ))}

      <button onClick={(e) => handleSubmit(e, i)}>SUBMIT</button>
    </>
  );
}
