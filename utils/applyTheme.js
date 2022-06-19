const light = {
  "--fontColor-primary": "#454545",
  "--fontColor-secondary": "#7F8487",
  "--background-primary": "#F9F2ED",
  "--background-secondary": "#FFF8F3",
};

const dark = {
  "--fontColor-primary": "#EEEEEE",
  "--fontColor-secondary": "#B2B1B9",
  "--background-primary": "#222831",
  "--background-secondary": "#141E27",
};

const applyTheme = (theme) => {
  let root = document.querySelector(":root");
  let styles = theme === "light" ? light : dark;
  for (let key in styles) root.style.setProperty(key, styles[key]);
};

module.exports.applyTheme = applyTheme;
