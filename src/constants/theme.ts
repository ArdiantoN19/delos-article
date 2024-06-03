export const COLORS: Record<string, string> = {
  primary: "#FFFFFF",
  secondary: "#EEEEEE",

  gray: "#686D76",
  darkGray: "#373A40",
  orange: "#DC5F00",
};

export const FONTS: Record<string, string> = {
  light: "Inter Light",
  regular: "Inter Regular",
  semibold: "Inter Semibold",
  bold: "Inter Bold",
};

export const SIZES: Record<string, string> = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};

export const SHADOWS: Record<string, string> = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  lg: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
};

export const CONTAINER = {
  sm: `${SIZES.xs} ${SIZES.md}`,
  md: `${SIZES.xs} ${SIZES["3xl"]}`,
  lg: `${SIZES.xs} ${SIZES["5xl"]}`,
  xl: `${SIZES.xs} ${SIZES["8xl"]}`,
};
