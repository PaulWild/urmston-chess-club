import Banner from "../components/banner";
import { Container } from "../components/container";
import chessImage from "./chess-board.jpg";

export default function Page() {
  return (
    <div>
      <Banner imgPath={chessImage} />
      <Container>
        <main>
          <h1>Welcome to Urmston chess club</h1>
          <p>
            We are a local chess club based in the heart of Urmston. We play
            social and league chess on a Thursday at Urmston Sports club
            @7:30pm.
          </p>
          <h2>Join us</h2>
          <p>
            We are always looking for new players and are open to people of all
            age and abilities. Wether you are just starting out and looking for
            a friendly over the board game or looking to compete in matches to
            anything anything in between.
          </p>
          <p>
            If you have any question or queries reach out to us on facebook
            where we will be happy to help.
          </p>
        </main>
      </Container>
    </div>
  );
}
