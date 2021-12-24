import React from 'react';
import './index.css';
import MyNavbar from './MyNavbar';
import MyCarousels from './MyCarousels';
import MyAbout from './MyAbout';
import OurService from './OurService';
import MyContact from './MyContact';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <>
     <MyNavbar/>
     <MyCarousels/>
     <MyAbout/>  
     <OurService/>
     <MyContact/>
      </>
  );
}

export default App;
