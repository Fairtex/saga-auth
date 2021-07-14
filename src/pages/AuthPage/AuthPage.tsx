import { FC } from 'react';
import styled from 'styled-components';
import { AuthLayout } from '../../layouts';
import { AuthForm } from '../../components';
import { AuthValues } from '../../types';
import { useDispatch } from 'react-redux';
import { actions } from '../../features/auth';

export const AuthPage: FC = () => {
  const dispatch = useDispatch();
  const submitHandler = (data: AuthValues) => {
    dispatch(actions.signInRequested(data));
  };
  return (
    <AuthLayout>
      <Container>
        <AuthForm onSubmit={submitHandler} />
      </Container>
    </AuthLayout>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
