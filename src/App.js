import React, {useState, useRef, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom'; 

import './App.styles.sass';

import Header from './components/header/header.component'; 
import Homepage from './pages/homepage/homepage.component';
import Rsvp from './pages/rsvp/rsvp.component';
import WhatToDo from './pages/what-to-do/what-to-do.component';
import Footer from './components/footer/footer.component';
import ExtendTrip from './pages/extend-trip/extend-trip.component';

function App() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
      setSticky(ref.current.getBoundingClientRect().top <= -120);
  };
 
  useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", () => handleScroll);
      };
  }, []);

  return (
    <div ref={ref} className="App">
      <Header isSticky={isSticky} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/rsvp" component={Rsvp} />
        <Route exact path="/what-to-do" component={WhatToDo} />
        <Route exact path="/extend-trip" component={ExtendTrip} />
      </Switch>
      <Footer/>
    </div>
  );
};

export default App;
