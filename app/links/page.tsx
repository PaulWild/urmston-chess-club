import { HiExternalLink } from "react-icons/hi";
import { Container } from "../../components/container";
import chessImage from "./../chess-board.jpg";
import Banner from "../../components/banner";

export default function Page() {
  return (
    <>
      <Banner imgPath={chessImage} />
      <Container>
        <h1>Links</h1>
        <ul>
          <li>
            <a href="https://www.manchesterchess.com/">
              Manchester Chess Federation <HiExternalLink />
            </a>
          </li>
          <li>
            <a href="https://www.englishchess.org.uk/">
              English Chess Federation <HiExternalLink />
            </a>
          </li>
        </ul>
      </Container>
    </>
  );
}
