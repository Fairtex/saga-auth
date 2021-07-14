import { FC } from 'react';
import styled from 'styled-components';
import { actions } from '../../features/auth';
import { useDispatch } from 'react-redux';

import { UILink, UIButton } from '../../UI';

interface HeaderProps {
  isAuth: boolean;
}

export const Header: FC<HeaderProps> = ({ isAuth }) => {
  const dispatch = useDispatch();
  return (
    <StyledHeader>
      <Container>
        <Navigation>
          {isAuth ? (
            <UIButton onClick={() => dispatch(actions.signOut())} text="logout" />
          ) : (
            <StyledLink href="/sign-in" text="Sign In" />
          )}
        </Navigation>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: aliceblue;
  padding: 15px 0;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(UILink)`
  padding: 10px 15px;
  text-transform: uppercase;
`;
