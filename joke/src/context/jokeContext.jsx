import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const MyContext = createContext();

export function JokeContext({ children }) {
  const [joke, setJoke] = useState({});

  const fetchJoke = useCallback(async () => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    setJoke(data);
  });

  const value = useMemo(
    () => ({
      joke,
      fetchJoke,
    }),
    [joke]
  );

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export const useMyContext = () => {
  const context = useContext(MyContext);
  return context;
};
