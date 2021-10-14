import React from 'react';
import MainPage from 'pages/MainPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainPage />
    </Router>
  );
}

export default App;
