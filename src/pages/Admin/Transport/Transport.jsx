import React, { useState, useEffect } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { HeadingH6 } from 'components/Typography';
import { RoundIconButton } from 'components/Buttons';
import Tabs from './Tabs';
import LocalTransportForm from './LocalTransportForm';
import HowToGetTransportForm from './HowToGetTransportForm';
import { TransportContainer } from './style';
import { TransportsContainer } from '../style';

function Transport() {
  const { path, url, isExact } = useRouteMatch();

  if (isExact) {
    return <Redirect to={`${url}/local`} />;
  }

  const transportPagesSwitch = (
    <Switch>
      <Route path={`${path}/how-to-get`}>
        <TransportContainer>
          <HowToGetTransportForm />
        </TransportContainer>
      </Route>
      <Route path={`${path}/local`}>
        <TransportContainer>
          <LocalTransportForm />
        </TransportContainer>
      </Route>
    </Switch>
  );

  return (
    <TransportsContainer>
      <Tabs url={url} path={path} />
      {transportPagesSwitch}
    </TransportsContainer>
  );
}

export default Transport;
