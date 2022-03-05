import React, { useState, useEffect } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import useTransport, {
  getLocalTransport,
  addLocalTransport,
  editLocalTransport,
  deleteLocalTransport,
  getHowToGetTransport,
  addHowToGetTransport,
  deleteHowToGetTransport,
  editHowToGetTransport,
} from 'components/useTransport';
import LocalTransportItem from './LocalTransportItem';
import HowToGetTransportItem from './HowToGetTransportItem';
import Tabs from './Tabs';
import LocalTransportForm from './LocalTransportForm';
import HowToGetTransportForm from './HowToGetTransportForm';
import { TransportContainer } from './style';
import { TransportsContainer } from '../style';

function Transport() {
  const { path, url, isExact } = useRouteMatch();

  const [{ localTransport, howToGetTransport }, dispatch] = useTransport();

  if (isExact) {
    return <Redirect to={`${url}/local`} />;
  }

  useEffect(() => {
    getLocalTransport(dispatch);
    getHowToGetTransport(dispatch);
  }, []);

  const handleAddHowToGetTransport = async (values) => {
    await addHowToGetTransport(dispatch, values);
  };

  const handleAddLocalTransport = async (values) => {
    await addLocalTransport(dispatch, values);
  };

  const handleEditHowToGetTransport = async (values, id) => {
    await editHowToGetTransport(dispatch, values, id);
  };

  const handleEditLocalTransport = async (values, id) => {
    await editLocalTransport(dispatch, values, id);
  };

  const handleDeleteHowToGetTransport = async (id) => {
    await deleteHowToGetTransport(dispatch, id);
  };

  const handleDeleteLocalTransport = async (id) => {
    await deleteLocalTransport(dispatch, id);
  };

  const transportPagesSwitch = (
    <Switch>
      <Route path={`${path}/how-to-get`}>
        <TransportContainer>
          <Box width="40%">
            <HowToGetTransportForm
              onAddTransport={handleAddHowToGetTransport}
            />
          </Box>
          <Box
            marginBottom="20px"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            {howToGetTransport.map((transport) => (
              <HowToGetTransportItem
                transport={transport}
                onEditTransport={handleEditHowToGetTransport}
                onDeleteTransport={handleDeleteHowToGetTransport}
              />
            ))}
          </Box>
        </TransportContainer>
      </Route>
      <Route path={`${path}/local`}>
        <TransportContainer>
          <Box width="40%">
            <LocalTransportForm onAddTransport={handleAddLocalTransport} />
          </Box>
          <Box
            marginBottom="20px"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            {localTransport.map((transport) => (
              <LocalTransportItem
                transport={transport}
                onEditTransport={handleEditLocalTransport}
                onDeleteTransport={handleDeleteLocalTransport}
              />
            ))}
          </Box>
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
