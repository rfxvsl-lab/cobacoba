export const cn = (...classes: Array<string | boolean | undefined>) =>
  classes.filter(Boolean).join(" ");
