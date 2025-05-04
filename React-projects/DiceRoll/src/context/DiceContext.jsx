import { createContext, useContext, useMemo, useState } from "react";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

const diceContext = createContext();

export function DiceProvider({ children }) {
  const diceImg = [
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
  ];

  const [diceOne, setDiceOne] = useState(faDiceOne);

  const [diceTwo, setDiceTwo] = useState(faDiceOne);

  function randomDice(diceImg) {
    const result = Math.floor(Math.random() * diceImg.length);
    const img = diceImg[result];
    return img;
  }

  function rollDice() {
    setDiceOne(randomDice(diceImg));
    setDiceTwo(randomDice(diceImg));
  }

  const value = useMemo(
    () => ({
      rollDice,
      diceOne,
      diceTwo,
    }),
    [diceOne, diceTwo, rollDice]
  );

  return <diceContext.Provider value={value}>{children}</diceContext.Provider>;
}

export function useDiceContext() {
  const context = useContext(diceContext);
  return context;
}
