import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeadingH6 } from 'components/Typography';
import { routes } from './routes';
import { SidebarContainer, LinkContainer } from './style';

function Sidebar({ location }) {
  const history = useHistory();
  return (
    <SidebarContainer>
      {routes.map((route) => (
        <LinkContainer
          key={route.id}
          selected={location.pathname === route.link}
          onClick={() => history.push(route.link)}
        >
          <HeadingH6>{route.name}</HeadingH6>
        </LinkContainer>
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;
