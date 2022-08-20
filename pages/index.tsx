import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "../components/Image";
import chessImage from "../public/images/image.jpeg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Urmston Chess Club</title>
        <meta name="description" content="Umrston chess club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs">
            <Image
              className={styles.img}
              src={chessImage}
              alt="chess images"
              width="400px"
              height="400px"
            />
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}></span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
