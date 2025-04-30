import { useMyContext } from "../context/allContext";
import styles from "../modules/resumeurl.module.css";

export default function ResumeURL() {
  const { resume } = useMyContext();
  const {
    setSelectedFile,
    setProgrammingChoice,
    programmingChoice,
    selectedFile,
    urlValue,
    setUrlvalue,
    aboutValue,
    setAboutValue,
  } = resume;

  const programmingOptions = ["javascript", "php", "golang", "java", "python"];

  return (
    <>
      <label htmlFor="resume">Upload Resume*</label>
      <input
        type="file"
        id="resume"
        className={styles.resume}
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />

      <label htmlFor="url">Enter URL*</label>
      <input
        type="text"
        placeholder="Enter URL"
        value={urlValue}
        onChange={(e) => setUrlvalue(e.target.value)}
      />

      <label htmlFor="choice">Select your choice</label>
      <select
        value={programmingChoice}
        id="choice"
        onChange={(e) => setProgrammingChoice(e.target.value)}
        required
      >
        <option value="answer" disabled>
          Select your answer
        </option>
        {programmingOptions.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>

      <label htmlFor="about">About</label>
      <textarea
        name="about"
        id="about"
        rows={8}
        placeholder="About yourself"
        value={aboutValue}
        onChange={(e) => setAboutValue(e.target.value)}
      ></textarea>
    </>
  );
}
