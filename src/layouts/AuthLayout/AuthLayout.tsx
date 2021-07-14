import React, { FC } from 'react';
import { Header } from '../../components';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <Header isAuth={false} />
      <main>{children}</main>
    </>
  );
};
