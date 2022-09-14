import './App.css';
import React from 'react';
import Fitness from './Components/Fitness-experience/Fitness';
import Footer from './Components/Footer/Footer';
import Image from './Components/heroimage/Image';
import Input from './Components/Input/Input';
import Navbar from './Components/Navbar';
import Search from './Components/Search/Search';
import axios from 'axios';



function App() {

  const [latitude, setLatitude] = React.useState("");
  const [longitude,setLongitude] = React.useState("");

  return (
    <div className="App">
      <Navbar/>
      <Image/>
      <Input setLatitude={setLatitude} setLongitude={ setLongitude } longitude={longitude} latitude={latitude}/>
      <Search longitude={longitude} latitude={latitude}/>
      <Fitness/>
      <Footer/>
    </div>
  );
}

export default App;
