import Facebook from "./facebook.png";
import Chess from "./chess_com.png";
import Lichess from "./lichess.png";
import styles from "./footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <p>© urmston chess club 2023</p>
        </div>
        <div className={styles.findus}>
          <ul>
            <li>
              <a href="https://www.facebook.com/UrmstonChess">
                <Image src={Facebook} alt="Find us on facebook" width={100} />
              </a>
            </li>
            <li>
              <a href="https://lichess.org/team/urmston-chess-club">
                <Image
                  src={Lichess}
                  alt="Find us on Lichess"
                  className={styles.lichess}
                  width={30}
                  height={30}
                />
              </a>
            </li>
            <li>
              <a href="https://www.chess.com/club/urmston-chess-club">
                <Image src={Chess} alt="Find us on chess.com" width={100} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
