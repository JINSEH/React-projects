import { useItemContext } from "../context/ItemContext";
import styles from "../modules/items.module.css";

export default function Items() {
  const {
    itemList,
    deleteItem,
    setEditedText,
    editItem,
    toggleEdit,
    editedText,
  } = useItemContext();
  return (
    <div>
      {itemList.map((item, index) => (
        <div key={index} className={styles.itemContainer}>
          <p>{index + 1}</p>
          {item.edit ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          ) : (
            <p>{item.name}</p>
          )}
          <div className={styles.buttonContainer}>
            <button
              className={styles.deleteButton}
              onClick={() => deleteItem(index)}
            >
              Delete
            </button>
            {item.edit ? (
              <button
                className={styles.editButton}
                onClick={() => editItem(editedText, index)}
              >
                Save
              </button>
            ) : (
              <button
                className={styles.editButton}
                onClick={() => toggleEdit(item.name, index)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
