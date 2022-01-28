import React, { useRef } from 'react';
import MainPage from 'pages/MainPage';
import Acomodation from 'pages/Acomodation';
import ActiveRest from 'pages/ActiveRest';
import ComplexTours from 'pages/ComplexTours';
import EcoCenter from 'pages/EcoCenter';
import Food from 'pages/Food';
import HowToGet from 'pages/HowToGet';
import InterestPlaces from 'pages/InterestPlaces';
import MasterClasses from 'pages/MasterClasses';
import Product from 'pages/Product';
import Propositions from 'pages/Propositions';
import Wolunteering from 'pages/Wolunteering';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Admin from 'pages/Admin';
import Login from 'pages/Login';
import useAuth from 'components/useAuth';
import { MainContainer, PageContainer } from 'style';

function App() {
  const topContainerRef = useRef(null);
  const { currentUser } = useAuth();

  return (
    <MainContainer ref={topContainerRef}>
      <Router>
        <Header topContainerRef={topContainerRef} />
        <PageContainer>
          <Switch>
            <Route path="/acomodation" component={Acomodation} />
            <Route path="/activerest" component={ActiveRest} />
            <Route path="/complextours" component={ComplexTours} />
            <Route path="/eco-center" component={EcoCenter} />
            <Route path="/food" component={Food} />
            <Route path="/how-to-get" component={HowToGet} />
            <Route path="/interestplaces" component={InterestPlaces} />
            <Route path="/masterclasses" component={MasterClasses} />
            <Route path="/product" component={Product} />
            <Route path="/propositions" component={Propositions} />
            <Route path="/wolunteering" component={Wolunteering} />
            <Route path="/admin">
              {currentUser ? <Admin /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/" component={MainPage} />
          </Switch>
          <Footer />
        </PageContainer>
      </Router>
    </MainContainer>
  );
}

export default App;
