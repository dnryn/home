import Head from "next/head";
import Image from "next/image";
import css from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={css.main}>
      <Head>
        <title>Home | Nitish</title>
      </Head>
      <h2>hi mom 👋!</h2>
      <p>look!! i made a website.</p>
      <Image
        src="/peter_dance.webp"
        height="252"
        width="450"
        alt="peter dancing"
      />
      <p>i&apos;m soooo happy!</p>
    </div>
  );
};

export default Home;
