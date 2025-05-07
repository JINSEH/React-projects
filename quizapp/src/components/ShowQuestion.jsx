import { useEffect, useState } from "react";
import { useQuestionContext } from "../context/QuestionContext";
import styles from "../modules/showquestion.module.css";
import ShowScore from "./ShowScore";

export default function ShowQuestion() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const { questionList, setScore, score, isFinished, setIsFinished } =
    useQuestionContext();
  const [i, setI] = useState(0);

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
    if (i + 1 == questionList.length) {
      setIsFinished(!isFinished);
      return;
    } else {
      setI(i + 1);
    }
  }

  useEffect(() => {
    console.log(score);
  }, [score]);

  return (
    <div className={styles.showquestion}>
      {isFinished ? (
        <ShowScore setI={setI} />
      ) : (
        <div>
          <h2>Question {i + 1}</h2>
          <h4>{questionList[i].question}</h4>
          {questionList[i].answers.map((answer, index) => (
            <div key={index} className={styles.answercontainer}>
              <input
                type="radio"
                name="answers"
                value={answer.text}
                checked={selectedAnswer === answer.text}
                onChange={handleRadioChange}
              />
              <label>{answer.text}</label>
            </div>
          ))}
        </div>
      )}
      {isFinished ? (
        <></>
      ) : (
        <button onClick={(e) => handleSubmit(e, i)}>SUBMIT</button>
      )}
    </div>
  );
}
