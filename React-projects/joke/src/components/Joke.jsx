import { useMyContext } from "../context/jokeContext";

export default function Joke() {
  const { joke } = useMyContext();
  return (
    <div>
      <p>
        "{joke.setup} {joke.punchline}"
      </p>
    </div>
  );
}
