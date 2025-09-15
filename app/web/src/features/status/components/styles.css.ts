import { style } from "@vanilla-extract/css";

export const headlineContainer = style({
  paddingTop: "0.75rem",
  paddingBottom: "0.5rem",
  paddingInline: "1.25rem",
  display: "flex",
  alignItems: "center",
});

export const heading = style({
  width: "100%",
  paddingInline: "1rem",
  fontWeight: "bold",
  lineHeight: 1.2,
});
