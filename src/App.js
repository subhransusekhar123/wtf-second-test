import './App.css';
import React from 'react';
import Fitness from './Components/Fitness-experience/Fitness';
import Footer from './Components/Footer/Footer';
import Image from './Components/heroimage/Image';
import Input from './Components/Input/Input';
import Navbar from './Components/Navbar';
import Search from './Components/Search/Search';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Image/>
      <Input/>
      <Search/>
      <Fitness/>
      <Footer/>
    </div>
  );
}

export default App;
