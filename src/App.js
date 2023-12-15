import './App.css';
// App.js
import React from 'react';
import Example from './Example';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import WhyChooseUs from './WhyChooseUs';
import ExploreMenu from './ExploreMenu';
import DeliveryPayment from './DeliveryPayment';
import Banner from './Banner';
import { Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <ul>
        <li><Link to="/Whychooseus">WhyChooseUs</Link></li>
        <li><Link to="/menu">ExploreMenu</Link></li>
        <li><Link to="/payment">DeliveryPayment</Link></li>
      </ul>
      <Banner />
      <Switch>
        <Route exact path="/menu" component={ExploreMenu} />
        <Route exact path="/Whychooseus" component={WhyChooseUs} />
        <Route exact path="/payment" component={DeliveryPayment} />
      </Switch>
    </>
  );
};

export default App;