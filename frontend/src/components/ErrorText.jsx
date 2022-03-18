import styled from "styled-components";
import { COLORS, FONT_SIZE } from "../style_constants";

const Text = styled.span`
  font-size: ${FONT_SIZE.BODY1};
  color: ${COLORS.ERROR_TEXT};
  margin-right: 5px;
`;

export const ErrorText = ({text}) => {
  return (
    <Text>{text}</Text>
  )
}
