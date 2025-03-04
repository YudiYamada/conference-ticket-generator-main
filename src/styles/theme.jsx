import { css } from "styled-components";

export const theme = {
  colors: {
    Neutral0: "hsl(0, 0%, 100%)",
    Neutral300: "hsl(252, 6%, 83%)",
    Neutral500: "hsl(245, 15%, 58%)",
    Neutral700: "hsl(245, 19%, 35%)",
    Neutral900: "hsl(248, 70%, 10%)",

    Orange500: "hsl(7, 88%, 67%)",
    Orange700: "hsl(7, 71%, 60%)",

    GradientText:
      "linear-gradient(to right, hsl(7, 86%, 67%), hsl(0, 0%, 100%))",
  },
  fonts: {
    main: "Inconsolata, monospace",
  },
  fontImports: css`
    @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap');
  `,
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
};
