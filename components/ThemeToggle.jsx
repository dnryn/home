import { useEffect, useState } from "react";
import { applyTheme } from "../utils/applyTheme";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // detect system theme preference
  useEffect(() => {
    const windowTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (windowTheme.matches) {
      setTheme((theme) => "dark");
    }
  }, []);

  // change css on theme toggle
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const switchTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={switchTheme}>{theme === "dark" ? "🌞" : "🌒"}</button>
  );
};

export default ThemeToggle;
