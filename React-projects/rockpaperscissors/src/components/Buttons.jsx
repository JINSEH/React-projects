import {
  faHandBackFist,
  faHandScissors,
  faHand,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../modules/buttons.module.css";
import { useChoiceContext } from "../context/ChoiceContext";
import Choices from "./Choices";

export default function Buttons() {
  const { handleChoice } = useChoiceContext();

  return (
    <>
      <div className={styles.buttonscontainer}>
        <button className={styles.buttons} onClick={() => handleChoice("ROCK")}>
          <FontAwesomeIcon icon={faHandBackFist} />
          Rock
        </button>
        <button
          className={styles.buttons}
          onClick={() => handleChoice("PAPER")}
        >
          <FontAwesomeIcon icon={faHand} />
          Paper
        </button>
        <button
          className={styles.buttons}
          onClick={() => handleChoice("SCISSORS")}
        >
          <FontAwesomeIcon icon={faHandScissors} />
          Scissors
        </button>
      </div>
      <Choices />
    </>
  );
}
