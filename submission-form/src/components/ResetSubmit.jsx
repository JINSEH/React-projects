import { useMyContext } from "../context/allContext";

export default function ResetSubmit() {
  const { resetAll, submitAll } = useMyContext();
  return (
    <>
      Reset or Submit
      <div>
        <button onClick={resetAll}>Reset</button>
        <button onClick={submitAll}>Submit</button>
      </div>
    </>
  );
}
