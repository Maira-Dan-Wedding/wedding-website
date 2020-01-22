import React, {useState, useRef, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom'; 

import './App.styles.sass';

import Header from './components/header/header.component'; 
import Homepage from './pages/homepage/homepage.component';
import Rsvp from './pages/rsvp/rsvp.component';

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
        <Route exact path="/registry" component={() => {
          window.location.href= "https://www.zola.com/wedding-registry";
          return null
        }} />
      </Switch>
    </div>
  );
};

export default App;
