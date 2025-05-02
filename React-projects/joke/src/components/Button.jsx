import styles from "../modules/button.module.css";
import { useMyContext } from "../context/jokeContext";

export default function Button() {
  const { fetchJoke } = useMyContext();

  return (
    <div>
      <button className={styles.generate_button} onClick={fetchJoke}>
        Click to generate a joke.
      </button>
    </div>
  );
}
