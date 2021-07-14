import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface LinkProps {
  href: string;
  text: string;
  className?: string;
}

export const UILink: FC<LinkProps> = ({ href, text, className }) => (
  <StyledLink to={href} className={className}>
    {text}
  </StyledLink>
);

const StyledLink = styled(Link)`
  font-size: 1.1rem;
  line-height: 1.2;
  color: blue;
  text-decoration: none;
`;
