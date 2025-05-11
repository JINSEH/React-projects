import styles from "../modules/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faMedium} />
        <FontAwesomeIcon icon={faStackOverflow} />
      </div>
      <div className={styles.right}>
        <HashLink to="#projects">Projects</HashLink>
        <HashLink to="#contact">Contact me</HashLink>
      </div>
    </div>
  );
}
