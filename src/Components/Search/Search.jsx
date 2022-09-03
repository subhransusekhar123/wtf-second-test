import axios from 'axios';
import React from 'react';
import Card from '../Card/Card';
import "./Search.css";

const Search = () => {
  const [location,setLocation] = React.useState("");
  const [address,setAddress] = React.useState([]);

  const changeHandler = (e) => {
    setLocation(e.target.value)
  }

  const callApi  = () => {
    axios.get("https://devapi.wtfup.me/gym/places")
    .then((res)=> setAddress(res.data.data[0].addressComponent))
    .catch((err)=> console.log(err))
  }

  React.useEffect(()=> {
    callApi()
  },[])


  return (
    <div className='row'>
      <div className='left-section col-3'>
        <h3 className='text-light'>Filters</h3>
        <h4 className='text-light'>Location</h4>
        <input type="text" name="" id="" onChange = {changeHandler}/>
        <h4 className='text-light'>Price</h4>
        <div className='search-price'>
          <input type="number" name="" id="" className='search-price-input'/>
          <input type="number" name="" id="" className='search-price-input'/>
        </div>
        <h4 className='text-light'>Cities</h4>
        <select name="cars" id="cars">
          <option value="volvo">Noida</option>
          <option value="saab">greater Noida</option>
          <option value="opel">delhi</option>
          <option value="audi">ncr</option>
        </select>
      </div>
      <div className='right-section col-9'>
        {
          address.map((ele)=> {
            return (
              
                <Card address={ele.address1}/>
              
            )
          })
        }
        <Card/>
      </div>
    </div>
  )
}

export default Search;