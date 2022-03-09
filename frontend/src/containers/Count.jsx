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
  background-color: #cccccc;
  border-color: #cccccc;
  border-bottom: 4px solid #aaaaaa;
  &:hover {
    margin-top: 2px;
    background: #cccccc;
    border-bottom: 2px solid #aaaaaa; }
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
