import { colors as c, mediaQueries as mq } from "gatsby-design-tokens";

const col = {
  ...c,
  modes: {
    light: {
      text: c.black,
      background: "#fff",
      primary: c.blue[60],
      iconToggle: c.yellow[40]
    },
    dark: {
      text: c.white,
      background: "#171C28",
      primary: "#0cf",
      iconToggle: c.yellow[60]
    }
  }
};

// export const borders = b
export const colors = col;
export const mediaQueries = mq;
