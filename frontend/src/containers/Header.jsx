import { IconButton } from '@material-ui/core';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { signOut } from '../apis/auth';
import { AuthContext } from '../App';
import { BUTTON_VALUE } from '../constants';

import MainLogo from '../images/logo.png';
import { COLORS } from '../style_constants';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 32px;
  background-color: ${COLORS.MAIN}
`

const MainLogoImage = styled.img`
  height: 70px;
  width: 200px;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled(IconButton)`
  &&&{
    font-size: 20px;
    margin-right: 10px;
  }
`


export const Header = () => {
  const {IsSignedIn} = useContext(AuthContext)
  let button;

  const handleSignOutSubmit = async (e) => {
    try {
      signOut();
      window.location.href = "/habitlog"
    } catch (e) {
      console.log(e);
    }
  }

  if (IsSignedIn){
    button = <>
      <Button component={Link} to="/habitlog/index">{BUTTON_VALUE.INDEX}</Button>
      <Button onClick={handleSignOutSubmit}>{BUTTON_VALUE.LOGOUT}</Button>
    </>
  } else {
    button = <>
      <Button component={Link} to="/signup">{BUTTON_VALUE.SIGNUP}</Button>
      <Button component={Link} to="/signin">{BUTTON_VALUE.LOGIN}</Button>
    </>
  }
  return (
    <>
      <HeaderWrapper>
        <Link to="/habitlog">
          <MainLogoImage src={MainLogo} alt="main logo" />
        </Link>
        <ButtonWrapper>
          {button}
        </ButtonWrapper>
      </HeaderWrapper>
    </>
  );
};
