export const __X = "X";
export const __O = "O";
export const ON = "ON";
export const OFF = "OFF";
export const DEFAULT_THEME = [{ theme: "no-style", name: "Default" }];
export const THEMES = [
  ...DEFAULT_THEME,
  { theme: "style-1", name: "Eight Pointed" },
  { theme: "style-2", name: "Hearts 1" },
  { theme: "style-3", name: "Gangster and Army man" },
  { theme: "style-4", name: "Hearts 2" },
  // { theme: "style-5", name: "X and O" },
];
export const THEMES_WITHOUT_DEFAULT = [...THEMES]
  .splice(1, THEMES.length)
  .map(({ theme }) => theme);
