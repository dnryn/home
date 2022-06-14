import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import css from "../styles/Nav.module.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleNavbar = () => {
    setMenuOpen((menuOpen) => !menuOpen);
    console.log(menuOpen);
  };

  const { width } = useWindowSize();

  useEffect(() => {
    if (menuOpen) {
      setMenuOpen((menuOpen) => !menuOpen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <div className={css.nav}>
      <h1>
        <Link href="/">Nitish</Link>
      </h1>
      <button
        onClick={toggleNavbar}
        className={menuOpen ? `${css["open-navbar"]}` : ""}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul
        className={
          width < 576 && menuOpen ? `${css["nav-mob"]}` : `${css["nav-desk"]}`
        }
      >
        <li>
          <Link href="/">$HOME</Link>
        </li>
        <li>
          <Link href="/blog">~/Blog</Link>
        </li>
        <li>
          <Link href="/stuff">~/Stuff</Link>
        </li>
        <li>
          <Link href="/moon">~/Moooon</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
