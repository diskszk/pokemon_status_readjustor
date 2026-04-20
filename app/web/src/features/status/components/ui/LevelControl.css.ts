import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  height: "2rem",
});
export const formLabel = style({
  margin: "0 2px",
});
export const inputContainer = style({
  width: "60px",
  display: "flex",
  position: "relative",
});

export const input = style({
  width: "100%",
  fontSize: "0.875rem",
  borderBottom: "transparent solid 1px",
  borderColor: "inherit",
});

export const stepper = style({
  display: "flex",
  flexDirection: "column",
  borderLeft: "transparent solid 1px",
  borderColor: "inherit",
  overflow: "hidden",
  paddingLeft: "1px",
});

export const button = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.5rem",
  marginRight: "1.5rem",
  height: "1rem",
  cursor: "pointer",
  borderBottom: "transparent solid 1px",
  borderColor: "inherit",
  selectors: {
    "&:hover": { background: "#EDF2F7" },
    "&:disabled": {
      background: "#F7FAFC",
      color: "#A0AEC0",
      cursor: "not-allowed",
      borderColor: "#E2E8F0",
    },
  },

});

export const triangleUp = style({
  width: 0,
  height: 0,
  borderLeft: "5px solid transparent",
  borderRight: "5px solid transparent",
  borderBottom: "5px solid currentColor",
});

export const triangleDown = style({
  width: 0,
  height: 0,
  borderLeft: "5px solid transparent",
  borderRight: "5px solid transparent",
  borderTop: "5px solid currentColor",
});
