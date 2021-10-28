import React from 'react';


import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './components/pages/homepage/home.component';
import ShopPage from './components/pages/shop/shop.component';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App () {
  return (
  <div>
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/shop' component={ShopPage} />
  </Switch>
</div>
  
    );
}

export default App;