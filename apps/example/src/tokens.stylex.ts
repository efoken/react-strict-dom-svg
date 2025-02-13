import { css } from 'react-strict-dom';

export const tokens = css.defineVars({
  squareColor: 'red',
  textColor: {
    default: 'darkred',
    '@media (prefers-color-scheme: dark)': 'lightred'
  },
  inputColor: 'red',
  inputPlaceholderColor: 'pink'
});

export const themeColors = css.defineVars({
  primary100: 'black',
  primary200: 'white'
});

export const systemColors = css.defineVars({
  squareColor: themeColors.primary100,
  outlineColor: themeColors.primary200
});
