import styled from 'styled-components';

import MainLogo from '../images/logo.png';
import { COLORS } from '../style_constants';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
  background-color: ${COLORS.MAIN}
`

const MainLogoImage = styled.img`
  height: 70px;
  width: 140px;
`

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
      </HeaderWrapper>
    </>
  );
};
