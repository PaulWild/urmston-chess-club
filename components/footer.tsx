import Facebook from "../public/images/facebook.png";
import Chess from "../public/images/chess_com.png";
import Lichess from "../public/images/lichess.png";
import { Container } from "./container";
import styles from "./footer.module.scss";
import Image from "./Image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.findus}>
          <ul>
            <li>
              <Image src={Facebook} alt="Find us on facebook" />
            </li>
            <li>
              <Image
                src={Lichess}
                alt="Find us on Lichess"
                className={styles.lichess}
                width="30px"
                height="30px"
              />
            </li>
            <li>
              <Image src={Chess} alt="Find us on chess.com" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
