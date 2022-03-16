import { useEffect, useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';
import { fetchHabit, putHabit } from '../apis/habits';
import { habitActionTypes, habitReducer, initialState } from '../reducers/habit';

import styled from 'styled-components';
import { COLORS } from '../style_constants';
import { BUTTON_VALUE, LABEL } from '../constants';

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

const TextareaWrapper = styled.div`
  width: 500px;
  height: 110px;
  margin: 15px 0px;
`;

const Textarea = styled.textarea`
  resize: none;
`

const ErrorText = styled.p`
  color: red;
  text-align: center;
  margin: 0px;
`;

const SubmitButtonWrapper = styled.div`
  width: 500px;
  height: 40px;
  margin: 10px 0px;
  text-align: center;
`;

const SubmitButton = styled.input`
  width: 100px;
  background-color: #cccccc;
  border-color: #cccccc;
  border-bottom: 5px solid #aaaaaa;
  &:hover {
    margin-top: 3px;
    background: #cccccc;
    border-bottom: 2px solid #aaaaaa; }
`;

export const Edit = ({match}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ state, dispatch] = useReducer(habitReducer, initialState);
  const [ title, setTitle ] = useState("");
  const [ detail, setDetail ] = useState("");

  useEffect(() => {
    dispatch({ type: habitActionTypes.FETCHING });
    fetchHabit({
      habitId: match.params.habitId
    })
    .then((data) =>{
      dispatch({
        type: habitActionTypes.FETCH_SUCCESS,
        payload: {
          habit: data.habit
        }
      });
      setTitle(data.habit.title);
      setDetail(data.habit.detail);
    })
  }, []);

  const onSubmit = (data) => {
    dispatch({ type: habitActionTypes.PUTTING });
    putHabit({
      habitId: match.params.habitId,
      email: "test@test.com",
      title: data.title,
      detail: data.detail,
      count: state.habit.count
    }).then(() => {
      dispatch({ type: habitActionTypes.PUTTING_SUCCESS });
      window.location.href = "/habitlog/index"
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputTextWrapper>
          <FormLabel>
            <LabelText>{ LABEL.TITLE }</LabelText>
            <InputText type="text" {...register("title", {required: true})} value={title} onChange={(e)=>setTitle(e.target.value)} />
          </FormLabel>
        </InputTextWrapper>
        <TextareaWrapper>
          <FormLabel>
            <LabelText>{ LABEL.DETAIl }</LabelText>
            <Textarea cols="40" rows="4" {...register("detail", {required: true})} value={detail} onChange={(e)=>setDetail(e.target.value)} />
          </FormLabel>
        </TextareaWrapper>
        {errors.detail && <ErrorText>This field</ErrorText>}
        <SubmitButtonWrapper>
          <SubmitButton type="submit" value={BUTTON_VALUE.SUBMIT}/>
        </SubmitButtonWrapper>
      </Form>
    </>
  );
};
