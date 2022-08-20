import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "../components/Image";
import chessImage from "../public/images/image2.jpg";
import { Container } from "../components/container";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Urmston Chess Club</title>
        <meta name="description" content="Umrston chess club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>Chess Club in the heart of the Trafford area of Manchester</h1>
          <p>All welcome to come along on Monday night</p>
          <p>
            In mauris lacus, luctus at erat vitae, pretium euismod ante. Integer
            feugiat ullamcorper posuere. Praesent accumsan ipsum et dolor
            cursus, quis ullamcorper quam aliquam.
          </p>
        </div>
        <div className={styles.image}>
          <Image className={styles.img} src={chessImage} alt="chess images" />
        </div>
      </section>

      <div>
        <Container>
          <section>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              condimentum urna ac rhoncus commodo. Maecenas interdum gravida
              tortor, at tempor odio rutrum quis.
            </p>
          </section>
        </Container>
      </div>

      {/* <main className={styles.main}>
        <div className={styles.grid}>
          <Image className={styles.img} src={chessImage} alt="chess images" />

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main> */}

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}></span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
