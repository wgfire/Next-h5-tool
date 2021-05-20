import styled from "styled-components";
import { baseType, divType, buttonType } from "./type";
const setKey = (props: any, key: string, style: any = baseStyle) => {
  return props[key] ? props[key] : style[key];
};

let baseStyle: baseType = {
  fontsize: "14px",
  margin: "0px",
  color: "black",
  padding: "0px",
  width: "max-content",
  height: "auto",
};
let divstyle: divType = {
  ...baseStyle,
  padding: "2px",
  display: "block",
  borderRudis: "2px",
  backGround: "white",
};

export const Pstyle = styled.p<baseType>`
  width: ${(props) => setKey(props, "width")};
  height: ${(props) => setKey(props, "height")};
  font-size: ${(props) => setKey(props, "fontsize")};
  margin: ${(props) => (props.margin ? props.margin : baseStyle.margin)};
  padding: ${(props) => setKey(props, "padding")};
  color: ${(props) => setKey(props, "color")};
`;
export const Divstyle = styled.div<divType>`
  width: ${(props) => setKey(props, "width")};
  height: ${(props) => setKey(props, "height")};
  font-size: ${(props) => setKey(props, "fontsize")};
  margin: ${(props) => (props.margin ? props.margin : baseStyle.margin)};
  padding: ${(props) => setKey(props, "padding", divstyle)};
  color: ${(props) => setKey(props, "color")};
  display: ${(props) => setKey(props, "display", divstyle)};
  border-radius: ${(props) => setKey(props, "borderRudis", divstyle)};
  background: ${(props) => setKey(props, "backGround", divstyle)};
`;

export const ButtonStyle = styled.button<buttonType>`
  &:hover {
    background: ${(props: any) =>
      props.btnType === "prim" ? "#61dafb" : "gree"};
  }
`;

// eslint-disable-next-line
export default {
  Pstyle,
  Divstyle,
  ButtonStyle,
};
