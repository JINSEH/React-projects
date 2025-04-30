import styles from "../modules/forminput.module.css";
import Particulars from "./Particulars";
import GenderSubject from "./GenderSubject";
import ResumeURL from "./ResumeURL";
import ResetSubmit from "./ResetSubmit";

export default function FormInput() {
  return (
    <div className={styles.forminput}>
      <Particulars />
      <GenderSubject />
      <ResumeURL />
      <ResetSubmit />
    </div>
  );
}
