import React from 'react';

import Button from './components/Button/Button';
import Header from './containers/Header/header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
       <Button className="btn-header" > Մուտք </Button> 
       <Button className="btn-main" > Ստանալ </Button> 
       <Button className="btn-footer" > Առաջարկ ու՞նես </Button> 
    </div>
  );
}

export default App;
