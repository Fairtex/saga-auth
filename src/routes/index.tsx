import { Switch, Redirect } from 'react-router-dom';
import { UserPage, AuthPage } from '../pages';
import { PageRoute } from '../components';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store';

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Redirect from="/" to="/profile" exact />
        <PageRoute path="/profile" component={UserPage} />
        <PageRoute path="/sign-in" component={AuthPage} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Routes;
