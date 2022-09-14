import axios from 'axios';
import React from 'react';
import Card from '../Card/Card';
import "./Search.css";

const Search = ({ longitude,latitude }) => {
  const [firstDisplayAddress,setFirstDisplayAddress] = React.useState([]);
  let [displayAddress,setDisplayAddress] = React.useState([]) ;
  const [location,setLocation] = React.useState("");
  const [address,setAddress] = React.useState([]);//api data


  const changeHandler = (e) => {
    setLocation(e.target.value)
    console.log(location)
    console.log(address)
    find_locations ( location )
  }

  const callApi2 = () => {
    // axios.get(`https://devapi.wtfup.me/gym/nearestgym?lat=${latitude}&long=${longitude}`)
    axios.get("https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231")
    .then((res)=>{
      setFirstDisplayAddress(res.data.data)
      console.log(firstDisplayAddress)
    })
    .catch((err)=>console.log(err))
  }

  const callApi  = () => {
    axios.get("https://api.wtfup.me/gym/places")
    .then((res)=> setAddress(res.data.data))
    
    .catch((err)=> console.log(err))
  }

  React.useEffect(()=> {
    callApi();
    callApi2()
  },[displayAddress])



  let find_locations = ( city ) => {
    for(let i = 0 ; i < address.length ; i++){
      if(city == address[i].city){
         setDisplayAddress([...address[i].addressComponent])
          console.log(displayAddress)
      }
    }
  }




  return (
    <div className='row'>
      <div className='left-section col-3'>
        <h3 className='text-light'>Filters</h3>
        <h4 className='text-light'>Location</h4>
        <input type="text" name="" id="" onChange = {changeHandler} />
        <h4 className='text-light'>Price</h4>
        <div className='search-price'>
          <input type="number" name="" id="" className='search-price-input'/>
          <input type="number" name="" id="" className='search-price-input'/>
        </div>
        <h4 className='text-light'>Cities</h4>
        <select name="place" id="cars" onChange={ changeHandler } >
          <option value="New Delhi">New Delhi</option>
          <option value="Ghaziabad">Ghaziabad</option>
          <option value="Greater Noida">Greater Noida</option>
          <option value="Noida">Noida</option>
          <option value="Delhi">Delhi</option>

        </select>
        <h4 className='text-light'>Locations</h4>
        <div>
          {
            displayAddress.map((ele)=>{
              return (
                <>
                  <div className='text-light'>{ `${ele.address1,ele.address2}`}</div>
                </>
              )
            })
            
          }
        </div>
          

    

      </div>
      <div className='right-section col-9'>
        {
          displayAddress.map((ele)=> {
            return (
              
                <Card address={ele.address1}/>
              
            )
          })
        }
      </div>
    </div>
  )
}

export default Search;