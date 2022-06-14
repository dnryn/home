import Head from "next/head";
import Image from "next/image";
import css from "../../styles/Stuff.module.css";

const Stuff = () => {
  return (
    <div className={css.main}>
      <Head>
        <title>Stuff | Nitish</title>
      </Head>
      <Image src="/stuff.jpg" height="252" width="450" alt="stuff" />
    </div>
  );
};

export default Stuff;
