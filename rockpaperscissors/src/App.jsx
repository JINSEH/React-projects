import Header from "./components/Header";
import Buttons from "./components/Buttons";
import styles from "./modules/app.module.css";
import Score from "./components/Score";
import { ChoiceProvider } from "./context/ChoiceContext";

function App() {
  return (
    <>
      <ChoiceProvider>
        <div className={styles.app}>
          <Header />
          <Buttons />
          <Score />
        </div>
      </ChoiceProvider>
    </>
  );
}

export default App;
