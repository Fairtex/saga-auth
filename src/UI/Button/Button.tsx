import { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  text: string;
}

export const UIButton: FC<ButtonProps> = ({
  type = 'button',
  className,
  onClick,
  isLoading = false,
  isDisabled = false,
  text,
}) => (
  <StyledBtn className={className} type={type} onClick={onClick} disabled={isDisabled}>
    {isLoading ? 'loading...' : text}
  </StyledBtn>
);

const StyledBtn = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #fff;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.2;
  color: #000;
`;
