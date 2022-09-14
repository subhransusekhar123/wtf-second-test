import React from 'react'
import "./Input.css"
const Input = ( {setLatitude,setLongitude,latitude,longitude,callApi2}) => {

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log("Geolocation is not supported by this browser.")
    }
  }
  
  function showPosition(position) {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
    callApi2()
   console.log(latitude,longitude)
  }


  return (
    <div className='input'>
      <input type="text" className='input-first' name="" id="" placeholder='Search gym name here...'/>
      <div className="input-toolbox">
        <div className="btn btn-danger"  onClick={getLocation}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>
        </div>
        <div className="btn btn-danger">Clear</div>
      </div>
    </div>
  )
}

export default Input