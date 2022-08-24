import type { NextPage } from "next";
import Banner from "../components/banner";
import chessImage from "../public/images/image2.jpg";
import { Container } from "../components/container";

const Home: NextPage = () => {
  return (
    <div>
      <Banner imgPath={chessImage} />
      <Container>
        <main>
          <h1>Welcome to Urmston chess club</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            blandit maximus nisi et venenatis. Duis tincidunt mauris in diam
            fringilla, et sagittis massa cursus. Maecenas odio elit, posuere non
            venenatis eget, pellentesque eu est. Morbi gravida tellus quis dolor
            efficitur ultricies. Donec feugiat quam non est feugiat, at tempus
            nibh condimentum. Aenean posuere auctor laoreet. Nunc felis felis,
            aliquet ac dapibus at, sodales ut lorem. Vestibulum vestibulum
            posuere nulla, sed facilisis metus accumsan a. Sed et orci mollis
            velit ultrices gravida et at ligula. Vivamus dictum neque at libero
            pretium, sed egestas velit sagittis. Sed quis eros eget lacus
            scelerisque sollicitudin laoreet semper leo. In facilisis nunc
            libero, eu pellentesque mauris molestie a. Aenean interdum sem vitae
            felis auctor fringilla malesuada id ex.
          </p>
          <h2>Lorem Ipsum</h2>
          <p>
            Vestibulum lacinia turpis quis neque vehicula, porttitor faucibus
            arcu sollicitudin. Nullam suscipit mattis dui nec posuere. Mauris id
            tristique lorem. Aliquam non ipsum nibh. Nunc id viverra enim. Etiam
            luctus magna vel enim dapibus venenatis ac at lorem. Sed at varius
            mauris, et tempor orci. Curabitur sed nisi finibus, lacinia ipsum
            varius, pharetra nibh. Donec sed justo nisl. Aenean porttitor vel
            massa non ultrices. Proin non rhoncus sem, vitae vehicula sapien.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. In hac habitasse platea dictumst. Etiam
            facilisis suscipit est, sed iaculis lacus.
          </p>
        </main>
      </Container>
    </div>
  );
};

export default Home;
