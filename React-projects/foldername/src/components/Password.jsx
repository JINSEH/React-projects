import styles from "../modules/password.module.css";
import { usePasswordContext } from "../context/passwordContext";
import validator from "validator";
import { useState } from "react";

export default function Password() {
  const { inputValue, setInputValue, error, setError } = usePasswordContext();
  const [errorStyle, setErrorStyle] = useState({});

  const checkPassword = () => {
    const checked = validator.isStrongPassword(inputValue);
    if (checked === true) {
      setError("Is Strong Password");
    } else {
      setError("Is not Strong Password");
    }
    setErrorStyle({ color: checked ? "green" : "red" });
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    checkPassword();
  };

  return (
    <div className={styles.password}>
      <p className={styles.header}>Checking Password Strength in ReactJs</p>
      <div>
        <label htmlFor="password">Enter Password: </label>
        <input
          type="text"
          name="password"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <p style={errorStyle}>{error}</p>
    </div>
  );
}
