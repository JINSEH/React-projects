import styles from "../modules/gendersubject.module.css";
import { useMyContext } from "../context/allContext";

export default function GenderSubject() {
  const genderoptions = [
    {
      label: "male",
      value: "Male",
    },
    {
      label: "female",
      value: "Female",
    },
    {
      label: "others",
      value: "Others",
    },
  ];

  const subjectoptions = [
    { label: "english", value: "English" },
    { label: "maths", value: "Maths" },
    { label: "physics", value: "Physics" },
  ];

  const { preferences } = useMyContext();
  const {
    selectedGenderValue,
    setSelectedGenderValue,
    checkedItems,
    setCheckedItems,
  } = preferences;

  const handleGenderChange = (event) => {
    setSelectedGenderValue(event.target.value);
    console.log(selectedGenderValue);
  };

  const handleSubjectChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({ ...prevState, [name]: checked }));
    console.log(checkedItems);
  };

  return (
    <>
      <label htmlFor="gender">Gender*</label>
      <div className={styles.gendersubject}>
        {genderoptions.map((genderoption) => (
          <label key={genderoption.value}>
            <input
              type="radio"
              value={genderoption.value}
              name="radio-group"
              checked={selectedGenderValue === genderoption.value}
              onChange={handleGenderChange}
            />
            {genderoption.value}
          </label>
        ))}
      </div>

      <label>Your Best Subject</label>
      <div className={styles.gendersubject}>
        {subjectoptions.map((subjectoption) => (
          <label key={subjectoption.value} htmlFor={subjectoption.value}>
            <input
              type="checkbox"
              value={subjectoption.value}
              name={subjectoption.value}
              checked={checkedItems[subjectoption.value] || false}
              onChange={handleSubjectChange}
            />
            {subjectoption.value}
          </label>
        ))}
      </div>
    </>
  );
}
