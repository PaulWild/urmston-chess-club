import Facebook from "./facebook.png";
import Chess from "./chess_com.png";
import Lichess from "./lichess.png";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto p-4 sticky top-[100vh]">
      <div className="flex flex-row items-center  place-content-between">
        <div className="text-sm">
          <p className="p-0">© urmston chess club 2023</p>
        </div>
        <ul className="flex flex-row justify-end items-center space-x-4  pr-2">
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
                className=""
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
    </footer>
  );
};

export default Footer;
