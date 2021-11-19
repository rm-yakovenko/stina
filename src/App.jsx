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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { MainContainer } from 'style';

function App() {
  const topContainerRef = useRef(null);

  return (
    <MainContainer ref={topContainerRef}>
      <Router>
        <Header topContainerRef={topContainerRef} />
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
          <Route path="/" component={MainPage} />
        </Switch>
        <Footer />
      </Router>
    </MainContainer>
  );
}

export default App;
