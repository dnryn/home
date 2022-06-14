import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import css from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="nitish's personal website" />
      </Head>
      <Nav />
      <main className={css.container}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
