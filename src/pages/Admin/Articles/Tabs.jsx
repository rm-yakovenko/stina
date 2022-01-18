import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { StyledTabLink, StyledTabButton, TabsContainer } from './style';

function Tabs({ url, path }) {
  const createMatch = useRouteMatch(`${path}/create`);
  const listMatch = useRouteMatch(`${path}/list`);

  return (
    <TabsContainer>
      <StyledTabLink to={`${url}/create`}>
        <StyledTabButton active={createMatch}>Create</StyledTabButton>
      </StyledTabLink>
      <StyledTabLink to={`${url}/list`}>
        <StyledTabButton active={listMatch}>List</StyledTabButton>
      </StyledTabLink>
    </TabsContainer>
  );
}

export default Tabs;
