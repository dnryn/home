import css from "../../styles/Changelogs.module.css";
import Head from "next/head";

const Changelogs = () => {
  return (
    <div>
      <Head>
        <title>Changelogs | Nitish</title>
      </Head>

      <h2 className="section-title">Changelogs</h2>
      <p className="section-sub">
        You should really consider your life choices if you&apos;re here.
      </p>

      <div className={css.container}>
        <h4>20/06/2022</h4>
        <ul className={css.list}>
          <li>
            <code>+</code> this page, because typing&nbsp;
            <code>git log</code>&nbsp; is sooo hard.
          </li>
          <li>
            <code>+</code> dark mode toggle, (located in the footer).
          </li>
          <li>
            <code>-</code> moons page, (it is dead, fortunately!).
          </li>
          <li>
            <code>-</code> that cringe footer text that said &apos;Powered by
            Servers&apos;.
          </li>
          <li>
            <code>=</code>&nbsp;rename&nbsp;
            <code>~/stuff</code> to&nbsp;
            <code>~/random</code>
          </li>
          <li>
            <code>=</code> some CSS overhauls.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Changelogs;
