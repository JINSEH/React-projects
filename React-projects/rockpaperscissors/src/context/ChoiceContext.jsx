import {
  useState,
  useContext,
  createContext,
  useMemo,
  useReducer,
  useCallback,
} from "react";

const ChoiceContext = createContext();

export function ChoiceProvider({ children }) {
  const [playerChoice, setPlayerChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [score, dispatch] = useReducer(reducer, {
    playerScore: 0,
    compScore: 0,
    result: "",
  });

  function reducer(score, action) {
    if (action.type == "lose") {
      return {
        ...score,
        compScore: score.compScore + action.payload.count,
        result: action.payload.result,
      };
    } else if (action.type == "win") {
      return {
        ...score,
        playerScore: score.playerScore + action.payload.count,
        result: action.payload.result,
      };
    } else if (action.type == "tie") {
      return { ...score, result: action.payload.result };
    }
  }

  //Function that use Math.random to determine Rock, Paper or Scissors(RPS)
  const rps = useCallback(() => {
    const result = Math.floor(Math.random() * 3);
    return ["ROCK", "PAPER", "SCISSORS"][result];
  }, []);

  const handleChoice = useCallback(
    (playerChoice) => {
      const computerChoice = rps();
      setPlayerChoice(playerChoice);
      setCompChoice(computerChoice);
      updateScore(playerChoice, computerChoice);
    },
    [rps, updateScore]
  );

  function updateScore(player, computer) {
    if (player === computer) {
      dispatch({ type: "tie", payload: { result: "Tie!" } });
    } else if (
      (player === "ROCK" && computer === "SCISSORS") ||
      (player === "SCISSORS" && computer === "PAPER") ||
      (player === "PAPER" && computer === "ROCK")
    ) {
      dispatch({ type: "win", payload: { count: 1, result: "You Win!" } });
    } else {
      dispatch({ type: "lose", payload: { count: 1, result: "You lose!" } });
    }
  }

  const value = useMemo(
    () => ({
      playerChoice,
      setPlayerChoice,
      compChoice,
      setCompChoice,
      rps,
      handleChoice,
      score,
    }),
    [playerChoice, compChoice, rps, handleChoice, score]
  );

  return (
    <ChoiceContext.Provider value={value}>{children}</ChoiceContext.Provider>
  );
}

export function useChoiceContext() {
  const context = useContext(ChoiceContext);

  return context;
}
