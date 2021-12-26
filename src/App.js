import React from 'react';
import { map1 } from './assets/Maps';
import Map from './components/map/Map';
import './App.css';


const App = () => {
  return (
    <div>
      <Map layout={map1} />
    </div>
  )
}

export default App;
