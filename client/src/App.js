import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Help from './components/help';
import TrackOrder from './components/TrackOrder';
import AboutUs from './components/AboutUs';
import Newsletter from './components/Newsletter';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Login from './components/Login';
import Cart from './components/Cart';


function App() {
  return (
    <>
      <Router>

        <div className="wrapper">
          <Navbar />
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/help' component={Help} />
            <Route exact path='/track-order' component={TrackOrder} />
            <Route exact path='/aboutus' component={AboutUs} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
          <Newsletter />
          <Benefits />
          <Footer />
        </div>
    </Router>
    </>

  );
}

export default App;
