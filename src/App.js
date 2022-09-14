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
  const [firstDisplayAddress,setFirstDisplayAddress] = React.useState([]);
  const [latitude, setLatitude] = React.useState("");
  const [longitude,setLongitude] = React.useState("");

  const callApi2 = () => {
    axios.get(`https://devapi.wtfup.me/gym/nearestgym?lat=${latitude}&long=${longitude}`)
    .then((res)=>{
      setFirstDisplayAddress(res?.data.data)
      console.log(firstDisplayAddress)
    })
    .catch((err)=>console.log(err))
  }





  return (
    <div className="App">
      <Navbar/>
      <Image/>
      <Input setLatitude={setLatitude} setLongitude={ setLongitude } longitude={longitude} latitude={latitude} callApi2={callApi2}/>
      <Search longitude={longitude} latitude={latitude} callApi2={callApi2} setFirstDisplayAddress={setFirstDisplayAddress} firstDisplayAddress={firstDisplayAddress}/>
      <Fitness/>
      <Footer/>
    </div>
  );
}

export default App;
