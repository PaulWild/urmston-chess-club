import Facebook from "../public/images/facebook.png";
import Chess from "../public/images/chess_com.png";
import Lichess from "../public/images/lichess.png";
import styles from "./footer.module.scss";
import Image from "./Image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.findus}>
          <ul>
            <li>
              <a href="https://www.facebook.com/UrmstonChess">
                <Image src={Facebook} alt="Find us on facebook" />
              </a>
            </li>
            <li>
              <a href="https://lichess.org/team/urmston-chess-club">
                <Image
                  src={Lichess}
                  alt="Find us on Lichess"
                  className={styles.lichess}
                  width="30px"
                  height="30px"
                />
              </a>
            </li>
            <li>
              <a href="https://www.chess.com/club/urmston-chess-club">
                <Image src={Chess} alt="Find us on chess.com" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
