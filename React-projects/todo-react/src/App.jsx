import AddItem from "./components/AddItem";
import Header from "./components/Header";
import Items from "./components/Items";
import { ItemProvider } from "./context/ItemContext";
import styles from "./modules/app.module.css";

function App() {
  return (
    <>
      <ItemProvider>
        <div className={styles.app}>
          <Header />
          <AddItem />
          <Items />
        </div>
      </ItemProvider>
    </>
  );
}

export default App;
