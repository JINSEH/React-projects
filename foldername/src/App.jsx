import Password from "./components/Password";
import { PasswordContainer } from "./context/passwordContext";
import styles from "./modules/app.module.css";

function App() {
  return (
    <>
      <PasswordContainer>
        <div className={styles.app}>
          <Password />
        </div>
      </PasswordContainer>
    </>
  );
}

export default App;
