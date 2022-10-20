import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost';

import {originals,action} from './urls'
import React from 'react';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={originals}  title="Netflix Originals"/>
      <RowPost url={action}  title="Action" isSmall/>
    </div>  
  )
}

export default App;
