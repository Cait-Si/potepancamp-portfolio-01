
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HabitDelete } from "../containers/HabitDelete";

import { COLORS, FONT_SIZE } from "../style_constants";
import { IconButton, EditIcon } from "./Icons";

const Wrapper = styled.div`
  display: flex;
  width: 350px;
  height: 180px;
  border-width: 10px;
  border-style: solid;
  border-color: ${COLORS.BORDER};
`;

const HabitAll = styled.div`
  padding: 10px 16px;
  width: 330px;
`;

const TitleWrapper = styled.div`
  display: flex;
  height: 35px;
  justify-content: space-between;
`;

const DetailWrapper = styled.div`
  height: 45px;
  margin-top: 15px;
`;

const CountWrapper = styled.div`
  margin-top: 15px;
  text-align: center;
`;

const MainText = styled.div`
  color: black;
  font-size: ${FONT_SIZE.BODY1};
  margin-right: 15px;
`;

const SubText = styled.div`
  color: ${COLORS.SUB_TEXT};
  font-size: ${FONT_SIZE.BODY2};
`;

const CountText = styled.div`
  color: ${COLORS.MAIN};
  font-size: ${FONT_SIZE.COUNT};
`

export const HabitWrapper = ({
  habit
}) => (
  <Wrapper>
    <HabitAll>
      <TitleWrapper>
        <MainText>{habit.title}</MainText>
        <div>
          <Link to={`/habitlog/${habit.id}/edit`}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Link>
          <HabitDelete habitId={habit.id} />
        </div>
      </TitleWrapper>
      <DetailWrapper>
        <SubText>{habit.detail}</SubText>
      </DetailWrapper>
      <CountWrapper>
        <CountText>{habit.count}</CountText>
      </CountWrapper>
    </HabitAll>
  </Wrapper>
);
