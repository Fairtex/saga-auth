import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../features/auth';
import { Redirect, Route, RouteProps } from 'react-router-dom';

type IProps = FC<
  {
    component: React.ComponentType<any>;
  } & RouteProps
>;

export const PageRoute: IProps = ({ component: Component, ...rest }) => {
  const isAuth = useSelector(selectAuth);

  return (
    <Route
      {...rest}
      render={props =>
        !isAuth && rest?.path !== '/sign-in' ? (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
