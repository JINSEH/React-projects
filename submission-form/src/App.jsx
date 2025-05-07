import Header from "./components/Header";
import styles from "./modules/app.module.css";
import FormInput from "./components/FormInput";
import { MyContextProvider } from "./context/allContext";

function App() {
  return (
    <>
      <MyContextProvider>
        <div className={styles.app}>
          <form className={styles.form}>
            <Header />
            <FormInput />
          </form>
        </div>
      </MyContextProvider>
    </>
  );
}

export default App;
