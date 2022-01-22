import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { StyledTabLink, StyledTabButton, TabsContainer } from './style';

function Tabs({ url, path }) {
  const createMatch = useRouteMatch(`${path}/local`);
  const listMatch = useRouteMatch(`${path}/how-to-get`);

  return (
    <TabsContainer>
      <StyledTabLink to={`${url}/local`}>
        <StyledTabButton active={createMatch}>Local</StyledTabButton>
      </StyledTabLink>
      <StyledTabLink to={`${url}/how-to-get`}>
        <StyledTabButton active={listMatch}>How to get</StyledTabButton>
      </StyledTabLink>
    </TabsContainer>
  );
}

export default Tabs;
