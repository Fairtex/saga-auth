import React, { FC } from 'react';
import { Header } from '../../components';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header isAuth={true} />
      <main>{children}</main>
    </>
  );
};
