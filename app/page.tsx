import Banner from "../components/banner";
import { Container } from "../components/container";
import chessImage from "./chess-board.jpg";
import cup_winners from "./cup_winners.jpeg";
import clubnight from "./clubnight.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Banner imgPath={chessImage} />
      <Container>
        <main>
          <article>
            <h1>Welcome to Urmston chess club</h1>
            <p>
              We are a local chess club based in the heart of Urmston. We play
              social and league chess on a Thursday at Urmston Sports club
              @7:30pm.
            </p>
          </article>

          <div className="flex flex-col md:flex-row place-content-between gap-8">
            <article className="basis-1/2  bg-gray-50 rounded-lg">
              <Container>
                <h2>Join us</h2>
                <p>
                  We are always looking for new players and are open to people
                  of all age and abilities. Wether you are just starting out and
                  looking for a friendly over the board game or looking to
                  compete in matches to anything anything in between.
                </p>
                <p>
                  If you have any question or queries reach out to us on
                  facebook where we will be happy to help.
                </p>
                <div className="w-full p-4">
                  <figure>
                    <Image src={clubnight} alt="" className="rounded-lg" />
                    <figcaption className="text-xs m-0.5 pl-1">
                      Club night 8<sup>th</sup> October 2023
                    </figcaption>
                  </figure>
                </div>
              </Container>
            </article>
            <article className="basis-1/2 bg-gray-50 rounded-xl">
              <Container>
                <h2>2023 Cup winners</h2>
                <p>
                  Urmston chess club were victorious in winning the Manchester
                  league B division cup and the stockport league
                  President&apos;s cup.
                </p>
                <div className="w-full p-4">
                  <figure>
                    <Image src={cup_winners} alt="" className="rounded-xl " />
                    <figcaption className="text-xs m-0.5  pl-1">
                      Team photo with President and league B cup.
                    </figcaption>
                  </figure>
                </div>
              </Container>
            </article>
          </div>
        </main>
      </Container>
    </div>
  );
}
