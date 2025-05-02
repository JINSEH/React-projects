import styles from "./modules/app.module.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Joke from "./components/Joke";
import { JokeContext } from "./context/jokeContext";

function App() {
  return (
    <>
      <JokeContext>
        <div className={styles.app}>
          <Header />
          <Button />
          <Joke />
        </div>
      </JokeContext>
    </>
  );
}

export default App;
