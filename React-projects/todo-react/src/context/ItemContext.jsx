import { useState } from "react";
import { useMemo } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ItemContext = createContext();

export function ItemProvider({ children }) {
  const [itemValue, setItemValue] = useState("");

  const [editedText, setEditedText] = useState("");

  const [itemList, setItemList] = useState([]);

  function deleteItem(itemIndex) {
    const updatedItemList = itemList.filter((_, index) => index !== itemIndex);
    setItemList(updatedItemList);
  }

  function addItem(newItem) {
    setItemList((prevItems) => {
      const updatedItems = [...prevItems, { name: newItem, edit: false }];
      console.log(updatedItems);
      return updatedItems;
    });
    setItemValue("");
  }

  function editItem(name, index) {
    setItemList((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { name: name, edit: false } : item
      )
    );
  }

  function toggleEdit(name, index) {
    setItemList((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, edit: !item.edit } : item
      )
    );
    setEditedText(name);
  }

  const value = useMemo(
    () => ({
      itemValue,
      setItemValue,
      addItem,
      itemList,
      deleteItem,
      editedText,
      setEditedText,
      editItem,
      toggleEdit,
    }),
    [itemValue, itemList, editedText]
  );
  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
}

export const useItemContext = () => {
  const context = useContext(ItemContext);
  return context;
};
