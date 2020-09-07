import React from 'react';
import './App.css';
import HomeScreen from './screens/homeScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
         <h1 className='h1-label'>CricScore</h1>
        <HomeScreen/>
    </div>
  );
}

export default App;
