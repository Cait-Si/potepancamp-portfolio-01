import Cookies from "js-cookie";
import styled from "styled-components";
import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signIn } from "../apis/auth";
import { AuthContext } from "../App";
import { COLORS } from "../style_constants";
import { BUTTON_VALUE, ERROR_TEXT, LABEL } from "../constants";
import { ErrorText } from "../components/ErrorText";

const Form = styled.form`
  width: 500px;
  height: 300px;
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
`;

export const SignIn = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const generteParams = () => {
    const signInParams = {
      email: email,
      password: password,
    };
    return signInParams;
  }

  const handleSignInSubmit = async () => {
    const params = generteParams();

    try {
      const res = await signIn(params);
      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);

        window.location.href = "/habitlog/index"
      }
    } catch (e) {
      console.log(e);
    };
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleSignInSubmit)}>
        <InputTextWrapper>
          <FormLabel>
            <LabelText>{LABEL.EMAIL}</LabelText>
            {errors.email && <ErrorText text={ERROR_TEXT.REQUIRED} />}
            <InputText type="email" {...register("email", {required: true})} value={email} onChange={(e)=>setEmail(e.target.value)} />
          </FormLabel>
        </InputTextWrapper>
        <InputTextWrapper>
          <FormLabel>
            <LabelText>{LABEL.PASSWORD}</LabelText>
            {errors.password && <ErrorText text={ERROR_TEXT.REQUIRED} />}
            <InputText type="password"{...register("password", {required: true})} value={password} onChange={(e)=>setPassword(e.target.value)} />
          </FormLabel>
        </InputTextWrapper>
        <SubmitButtonWrapper>
          <SubmitButton type="submit" >{BUTTON_VALUE.LOGIN}</SubmitButton>
        </SubmitButtonWrapper>
        <LinkWrapper>
          <Link to="/signup">新規登録へ</Link>
        </LinkWrapper>
      </Form>
    </>
  );
};
