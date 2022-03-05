import React from 'react';
import Navbar from './Navbar';
import Cont1 from './Cont1';
import Timer from './Timer';
import Button from './Button';
import Events from './Events';
import MainEvent from './MainEvent';

import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Cont1 />
      
      <Timer />
      <Button />
      <Events />
      <MainEvent />
      <Contact />
    </div>
  );
}

export default App;
