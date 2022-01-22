import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useLocation,
} from 'react-router-dom';
import Sidebar from './Sidebar';
import Videos from './Videos/Videos';
import Places from './Places/Places';
import Articles from './Articles/Articles';
import Transport from './Transport/Transport';
import { PageContainer } from './style';

function Admin() {
  const location = useLocation();

  const { path, url, isExact } = useRouteMatch();

  if (isExact) {
    return <Redirect to={`${url}/videos`} />;
  }

  const adminPagesSwitch = (
    <Switch>
      <Route path={`${path}/videos`}>
        <Videos />
      </Route>
      <Route path={`${path}/places`}>
        <Places />
      </Route>
      <Route path={`${path}/articles`}>
        <Articles />
      </Route>
      <Route path={`${path}/transport`}>
        <Transport />
      </Route>
    </Switch>
  );

  return (
    <PageContainer>
      <Sidebar location={location} />
      {adminPagesSwitch}
    </PageContainer>
  );
}

export default Admin;
