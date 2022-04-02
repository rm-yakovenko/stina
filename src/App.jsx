import React, { useRef, useEffect } from 'react';
import MainPage from 'pages/MainPage';
import EcoCenter from 'pages/EcoCenter';
import WhatToDo from 'pages/WhatToDo';
import HowToGet from 'pages/HowToGet';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Footer from 'components/Footer';
import Admin from 'pages/Admin';
import Login from 'pages/Login';
import ArticlePage from 'pages/Article';
import useAuth from 'components/useAuth';
import { MainContainer, PageContainer } from 'style';

function App() {
  const topContainerRef = useRef(null);
  const { currentUser } = useAuth();

  return (
    <MainContainer ref={topContainerRef}>
      <Router>
        <PageContainer>
          <Switch>
            <Route path="/eco-center" component={EcoCenter} />
            <Route path="/category/:id" component={WhatToDo} exact />
            <Route
              path="/category/:categoryId/articles/:articleId"
              component={ArticlePage}
            />
            <Route path="/how-to-get" component={HowToGet} />
            <Route path="/gospodar">
              {currentUser ? <Admin /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/">
              <MainPage topContainerRef={topContainerRef} />
            </Route>
          </Switch>
          <Footer />
        </PageContainer>
      </Router>
    </MainContainer>
  );
}

export default App;
