import styled from "styled-components";
import Select from "react-select";
const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});
export const CustomSelectEl = styled(Select).attrs({
  styles: {
    control: (styles) => ({
      ...styles,
      backgroundColor: `var(--colors-ui-base)`,
      borderRadius: "var(--b-radius)",
      padding: `0.25rem`,
      height: "50px",
      cursor: "pointer",
      color: "var(--colors-text)",
      border: `none`,
      boxShadow: "none",
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: "var(--colors-ui-base)",
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected && "var(--colors-bg)",
      color: state.isSelected && "var(--colors-text)",
    }),

    singleValue: (styles) => ({
      ...styles,
      color: "var(--colors-text)",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "var(--colors-text)",
    }),
  },
})`
  border: none;
`;
