import { Heading, Card, Image, Text } from "@chakra-ui/react";
import styles from "../modules/section.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Section() {
  return (
    <div id="projects" className={styles.section}>
      <div className={styles.contentWrapper}>
        <Heading fontSize="20px">Featured Projects</Heading>
        <div className={styles.cardContainer}>
          <Card.Root>
            <Image
              src="https://media.geeksforgeeks.org/wp-content/uploads/20230616135809/gfg.jpg"
              h="auto"
              maxH="350px"
            />
            <Card.Body>
              <Card.Title>IP Address Finder</Card.Title>
              <Card.Description>
                An IP address finder app that lets you find your client’s
                approximate location on a map.An IP address is a unique address
                that identifies a device on the internet or a local network. IP
                stands for “Internet Protocol,” which is the set of rules
                governing the format of data sent via the internet or local
                network.
              </Card.Description>
            </Card.Body>
            <Card.Footer gap="1" className={styles.footer}>
              <Text>See more</Text>
              <FontAwesomeIcon icon={faArrowRight} />
            </Card.Footer>
          </Card.Root>

          <Card.Root>
            <Image
              src="https://media.geeksforgeeks.org/wp-content/uploads/20240724172528/Screenshot-(199)-660.png"
              h="auto"
              maxH="350px"
            />
            <Card.Body>
              <Card.Title>Rock Paper Scissors</Card.Title>
              <Card.Description>
                This project basically implements class components and manages
                the state accordingly. The player uses a particular option from
                Rock, Paper, or Scissors and then Computer chooses an option
                randomly. The logic of scoring and winning is implemented using
                JSX.
              </Card.Description>
            </Card.Body>
            <Card.Footer gap="1" className={styles.footer}>
              <Text>See more</Text>
              <FontAwesomeIcon icon={faArrowRight} />
            </Card.Footer>
          </Card.Root>

          <Card.Root>
            <Image
              src="https://media.geeksforgeeks.org/wp-content/uploads/20230613161518/Screenshot-from-2023-06-13-16-15-04.png"
              h="auto"
              maxH="350px"
            />
            <Card.Body>
              <Card.Title>Dice Rolling App</Card.Title>
              <Card.Description>
                This application rolls two dice and displays a random number
                between 1 and 6 as we click the button both dice shake and
                generate a new number that shows on the upper face of the dice
                (in dotted form as a standard dice). The numbers on the upper
                face are generated randomly each time we roll the dice.
              </Card.Description>
            </Card.Body>
            <Card.Footer gap="1" className={styles.footer}>
              <Text>See more</Text>
              <FontAwesomeIcon icon={faArrowRight} />
            </Card.Footer>
          </Card.Root>

          <Card.Root>
            <Image
              src="https://media.geeksforgeeks.org/wp-content/uploads/20230606125727/gfg.png"
              h="auto"
              maxH="350px"
            />
            <Card.Body>
              <Card.Title>Todo List</Card.Title>
              <Card.Description>
                This to-do list can add new tasks we can also delete the tasks
                by clicking on them. The logic is handled by a click event
                handler whenever the user clicks on a task it gets deleted from
                the list.
              </Card.Description>
            </Card.Body>
            <Card.Footer gap="1" className={styles.footer}>
              <Text>See more</Text>
              <FontAwesomeIcon icon={faArrowRight} />
            </Card.Footer>
          </Card.Root>
        </div>
      </div>
    </div>
  );
}
