import { useEffect, useReducer } from "react";
import styled from "styled-components";

import { HabitWrapper } from "../components/HabitWrapper";

import { fetchHabits } from "../apis/habits";

import {
  initialState,
  habitsActionTypes,
  habitsReducer
} from "../reducers/habits";

import { CreateIcon } from "../components/Icons";
import { Link } from "react-router-dom";
import { COLORS } from "../style_constants";

const HabitsContentsList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const ItemWrapper = styled.div`
  margin: 15px;
`;

const IconWrapper = styled.div`
  width: 350px;
  height: 180px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

const Box = styled.div`
  width: 350px;
  height: 180px;
  padding: 10px;
  margin: 15px;
`;

const FlexBox = () => (
  <>
    <Box />
    <Box />
  </>
);

const CreateIconColor = styled(CreateIcon)`
  color: ${COLORS.MAIN}
  cursor: pointer;
`

export const Index = () => {
  const [state, dispatch] = useReducer(habitsReducer, initialState)

  useEffect(() => {
    dispatch({ type: habitsActionTypes.FETCHING });
    fetchHabits()
    .then((data) =>
      dispatch({
        type: habitsActionTypes.FETCH_SUCCESS,
        payload: {
          habits: data.habits
        }
      })
    )
  }, []);
  return (
    <>
      <HabitsContentsList>
        {
          state.habitsList.map(habit =>
            <ItemWrapper key={habit.id}>
              <HabitWrapper habit={habit} />
            </ItemWrapper>
          )
        }
        <IconWrapper>
          <Link to="/habitlog/habit/create">
            <CreateIconColor fontSize="large" />
          </Link>
        </IconWrapper>
        <FlexBox />
      </HabitsContentsList>
    </>
  );
};
