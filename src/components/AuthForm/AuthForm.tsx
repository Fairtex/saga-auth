import { FC } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { AuthValues } from '../../types';

import { selectLoadingStatus } from '../../features/auth';
import { UIButton } from '../../UI';

interface AuthFormProps {
  onSubmit: (values: AuthValues) => void;
}

export const AuthForm: FC<AuthFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthValues>();

  const loadingStatus = useSelector(selectLoadingStatus);
  const isLoading = loadingStatus === 'pending';

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Sign In</Title>
      <StyledLabel>
        Email
        <StyledInput type="email" {...register('email', { required: true })} />
        {errors.email && <ErrorMessage>Email field is required</ErrorMessage>}
      </StyledLabel>
      <StyledLabel>
        Name
        <StyledInput type="text" {...register('name', { required: true })} />
        {errors.name && <ErrorMessage>Name field is required</ErrorMessage>}
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput type="password" {...register('password', { required: true })} />
        {errors.password && <ErrorMessage>Password field is required</ErrorMessage>}
      </StyledLabel>
      <SubmitBtn type="submit" text="Submit" isLoading={isLoading} isDisabled={isLoading} />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  padding: 1rem;
  width: 25rem;
  background-color: aliceblue;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  line-height: 1.1;
  margin: 0 0 15px;
`;

const StyledLabel = styled.label`
  display: block;
  position: relative;
  font-size: 1.2rem;
  line-height: 1.2;
  padding-bottom: 35px;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 10px 15px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #fff;
`;

const ErrorMessage = styled.span`
  position: absolute;
  left: 0;
  top: calc(100% - 18px);
  font-size: 0.8rem;
  line-height: 1;
  color: red;
`;

const SubmitBtn = styled(UIButton)`
  display: block;
  padding: 10px;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.1;
  color: #fff;
  background-color: royalblue;
`;
