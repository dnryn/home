import css from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={css.footer}>
      <p>Powered by Servers ❤️</p>

      <p>
        ©&nbsp;
        <a href="https://knitish.dev" target="_blank" rel="noopener noreferrer">
          Nitish
        </a>
      </p>
    </div>
  );
};

export default Footer;
