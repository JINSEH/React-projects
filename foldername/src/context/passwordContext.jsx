import { useState, useContext, useMemo, createContext } from "react";

const passwordContext = createContext();

export function PasswordContainer({ children }) {
  const [inputValue, setInputValue] = useState("");

  const [error, setError] = useState("");

  const value = useMemo(
    () => ({
      inputValue,
      setInputValue,
      error,
      setError,
    }),
    [inputValue, error]
  );
  return (
    <passwordContext.Provider value={value}>
      {children}
    </passwordContext.Provider>
  );
}

export const usePasswordContext = () => {
  const context = useContext(passwordContext);
  return context;
};
