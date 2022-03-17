import { useContext, useState } from "react";
import Cookies from "js-cookie";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { signUp, signIn } from "../apis/auth";
import { BUTTON_VALUE, LABEL } from "../constants";
import { COLORS } from "../style_constants";
import { AuthContext } from "../App";

const Form = styled.form`
  width: 500px;
  height: 450px;
  border-width: 10px;
  border-style: solid;
  border-color: ${COLORS.BORDER};
  margin: 100px auto 0px auto;
`;

const InputTextWrapper = styled.div`
  width: 500px;
  height: 60px;
  margin: 15px 0px;
`;

const LabelText = styled.p`
  margin: 0px;
`;

const InputText = styled.input`
  width: 300px;
  height: 30px;
`;

const FormLabel = styled.label`
  display: block;
  text-align: center;
`;

const SubmitButtonWrapper = styled.div`
  width: 500px;
  height: 40px;
  margin: 20px 0px;
  text-align: center;
`;

const SubmitButton = styled.button`
  width: 100px;
  background-color: #cccccc;
  border-color: #cccccc;
  border-bottom: 5px solid #aaaaaa;
  &:hover {
    margin-top: 3px;
    background: #cccccc;
    border-bottom: 2px solid #aaaaaa; }
`;

const LinkWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
`

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const {setIsSignedIn, setCurrentUser} = useContext(AuthContext)


  const generateParams = () => {
    const signUpParams = {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };
    return signUpParams;
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const params = generateParams();
    try {
      const res = await signUp(params);
      console.log(res);
      alert("confirm email");
      const respons = await signIn(params);
      if (respons.status === 200) {
        Cookies.set("_access_token", respons.headers["access-token"]);
        Cookies.set("_client", respons.headers["client"]);
        Cookies.set("_uid", respons.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(respons.data.data);

        window.location.href = "/habitlog/index"
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Form>
      <InputTextWrapper>
        <FormLabel>
          <LabelText>{LABEL.NAME}</LabelText>
          <InputText type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </FormLabel>
      </InputTextWrapper>
      <InputTextWrapper>
        <FormLabel>
          <LabelText>{LABEL.EMAIL}</LabelText>
          <InputText type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormLabel>
      </InputTextWrapper>
      <InputTextWrapper>
        <FormLabel>
          <LabelText>{LABEL.PASSWORD}</LabelText>
          <InputText type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormLabel>
      </InputTextWrapper>
      <InputTextWrapper>
        <FormLabel>
          <LabelText>{LABEL.PASSWORD_CONFIRM}</LabelText>
          <InputText type="password" id="password_confirmation" name="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </FormLabel>
      </InputTextWrapper>
      <SubmitButtonWrapper>
        <SubmitButton type="submit" onClick={(e) => handleSignUpSubmit(e)}>
          {BUTTON_VALUE.SUBMIT}
        </SubmitButton>
      </SubmitButtonWrapper>
      <LinkWrapper>
        <Link to="/signin">サインインへ</Link>
      </LinkWrapper>
    </Form>
  );
};
