import css from "../styles/Footer.module.css";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <div className={css.footer}>
      <p>© 2022</p>
      <ThemeToggle />
      <p>
        by{" "}
        <a href="https://knitish.dev" target="_blank" rel="noopener noreferrer">
          Nitish
        </a>
      </p>
    </div>
  );
};

export default Footer;
