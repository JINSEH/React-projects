import { useItemContext } from "../context/ItemContext";
import styles from "../modules/additem.module.css";

export default function AddItem() {
  const { itemValue, setItemValue, addItem } = useItemContext();
  return (
    <div className={styles.additem}>
      <input
        type="text"
        placeholder="add item..."
        onChange={(e) => {
          setItemValue(e.target.value);
        }}
        value={itemValue}
      />
      <button onClick={() => addItem(itemValue)}>ADD</button>
    </div>
  );
}
