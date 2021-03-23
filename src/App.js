import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Locations from './components/pages/Locations';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/Footer';
import Descriptions from './components/pages/Descriptions';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/locations' component={Locations} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/description' component={Descriptions}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;