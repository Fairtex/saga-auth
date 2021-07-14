import { FC } from 'react';
import styled from 'styled-components';
import { MainLayout } from '../../layouts';
import { selectUserData } from '../../features/auth';
import { useSelector } from 'react-redux';

export const UserPage: FC = () => {
  const userData = useSelector(selectUserData);
  return (
    <MainLayout>
      <Container>
        <UserInfo>
          <UserText>Email: {userData?.email}</UserText>
          <UserText>Name: {userData?.name}</UserText>
        </UserInfo>
      </Container>
    </MainLayout>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
`;

const UserInfo = styled.div`
  text-align: center;
  padding: 100px 150px;
`;

const UserText = styled.p`
  font-size: 1.3rem;
  line-height: 1.2;
  color: #000;
  margin: 0 0 15px;
`;
