import { useState } from "react"
import styled from "styled-components"
import { putHabit } from "../apis/habits";

import { COLORS, FONT_SIZE } from "../style_constants"

const CountText = styled.div`
  color: ${COLORS.MAIN};
  font-size: ${FONT_SIZE.COUNT};
  margin-right: 70px;
`;

const CountButton = styled.button`
  border-radius: 50%;
  width: 70px;
  background-color: ${COLORS.COUNT_BUTTON};
  border-color: ${COLORS.COUNT_BUTTON};
  border-bottom: 4px solid ${COLORS.COUNT_BUTTON_BOTTOM};
  &:hover {
    margin-top: 2px;
    background: ${COLORS.COUNT_BUTTON};
    border-bottom: 2px solid ${COLORS.COUNT_BUTTON_BOTTOM}; }
`;

export const Count = ({habit}) => {
  const [count, setCount] = useState(habit.count);
  const new_count = count + 1;

  const upCount = () => {
    setCount(new_count);
    putHabit({
      habitId: habit.id,
      email: "test@test.com",
      title: habit.title,
      detail: habit.detail,
      count: new_count
    })
  };

  return (
    <>
      <CountText>{count}</CountText>
      <CountButton onClick={upCount} >できた！</CountButton>
    </>
  )
}
