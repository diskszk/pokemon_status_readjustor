import { css } from "@emotion/react";

export const inputCss = css`
  &::-webkit-calendar-picker-indicator {
    width: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
  }
  &&::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`;
