/**
 * Created on Wed Apr 10 2019
 * Copyright (c) 2019 Starky's club
 * @author VĂĄclav Brzezina
 */

import { rem } from "polished";
import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  colors: {
    white: string;
    black: string;
  };
  fonts: {
    default: string;
  };
  fontWeights: {
    textLight: number;
    textRegular: number;
    textBold: number;
  };
  fontSizes: {
    textBase: string;
    textSmall: string;
    textMedium: string;
    textBig: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
  };
  lineHeights: {
    textBase: number;
    textSmall: number;
    textMedium: number;
    textBig: number;
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
  };
  borderRadius: string;
}

export const theme: IThemeInterface = {
  colors: {
    white: "#fff",
    black: "#000000"
  },
  fonts: {
    default: "Open Sans"
  },
  fontWeights: {
    textLight: 300,
    textRegular: 400,
    textBold: 600
  },
  fontSizes: {
    textBase: rem("13px"),
    textSmall: rem("11px"),
    textMedium: rem("18px"),
    textBig: rem("22px"),
    h1: rem("70px"),
    h2: rem("48px"),
    h3: rem("36px"),
    h4: rem("24px"),
    h5: rem("20px")
  },
  lineHeights: {
    textBase: 1.2,
    textSmall: 1,
    textMedium: 1.1,
    textBig: 1.4,
    h1: 1.5,
    h2: 1.4,
    h3: 1.3,
    h4: 1.2,
    h5: 1.2
  },
  borderRadius: rem("5px")
};

export default styled;
export { css, createGlobalStyle, keyframes, ThemeProvider, withTheme };
