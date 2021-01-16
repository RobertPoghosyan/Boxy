import React from 'react';

import Button from './components/Button/Button'

import './App.css';

function App() {
  return (
    <div className="App">
       <Button className="btn-header" > Մուտք </Button> 
       <Button className="btn-main" > Ստանալ </Button> 
       <Button className="btn-footer" > Առաջարկ ու՞նես </Button> 
    </div>
  );
}

export default App;
