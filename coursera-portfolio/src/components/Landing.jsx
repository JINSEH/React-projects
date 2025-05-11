import { Heading, Avatar } from "@chakra-ui/react";
import styles from "../modules/landing.module.css";

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.profile}>
        <Avatar.Root className={styles.avatar}>
          <Avatar.Fallback name="gojo" />
          <Avatar.Image src="https://i.pinimg.com/736x/0f/04/ac/0f04ac135a8d6db96514bd97261c1c97.jpg" />
        </Avatar.Root>
        <p>Hello, I am Edwin!</p>
      </div>
      <Heading className={styles.heading}>
        A frontend developer specialised in React
      </Heading>
    </div>
  );
}
