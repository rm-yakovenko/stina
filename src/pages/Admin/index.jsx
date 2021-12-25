import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Videos from './Videos/Videos';
import Places from './Places/Places';
import Articles from './Articles';
import { PageContainer } from './style';

function Admin() {
  const location = useLocation();

  const renderComponent = () => {
    switch (location.pathname) {
      case '/admin/videos':
        return <Videos />;
      case '/admin/places':
        return <Places />;
      case '/admin/articles':
        return <Articles />;
      default:
        return <Videos />;
    }
  };
  return (
    <PageContainer>
      <Sidebar location={location} />
      {renderComponent()}
    </PageContainer>
  );
}

export default Admin;
