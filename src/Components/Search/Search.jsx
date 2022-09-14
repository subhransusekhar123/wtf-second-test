import axios from 'axios';
import React from 'react';
import Card from '../Card/Card';
import "./Search.css";

const Search = ({ longitude,latitude,callApi2,firstDisplayAddress,setFirstDisplayAddress }) => {
  // let [displayAddress,setDisplayAddress] = React.useState([]) ;
  const [location,setLocation] = React.useState("");
  const [address,setAddress] = React.useState([]);//api data

  
  const callApi3 = () => {
    axios.get(`https://devapi.wtfup.me/gym/nearestgym?lat=${latitude}&long=${longitude}&city=${location}`)
    .then((res)=>{
      setFirstDisplayAddress(res?.data.data)
      console.log(firstDisplayAddress)
    })
    .catch((err)=>console.log(err))
  }

const changeHandler2 = (e) => {
  setLocation(e.target.value)
  callApi3()
}
  const changeHandler = (e) => {
    setLocation(e.target.value)
    console.log( location)
    console.log( address )
    find_locations ( location )
  }



  const callApi  = () => {
    axios.get("https://api.wtfup.me/gym/places")
    .then((res)=> setAddress( res.data.data ))
    .catch((err)=> console.log( err ))
  }

  React.useEffect(()=> {
    callApi();
  },[])


let boxClickHandler = (ele) => {
  setFirstDisplayAddress()
}



  let find_locations = ( city ) => {
    for(let i = 0 ; i < address.length ; i++){
      if(city == address[i].city){
         setFirstDisplayAddress([...address[i].addressComponent])
          console.log(firstDisplayAddress)
      }
    }
  }




  return (
    <div className='row'>
      <div className='left-section col-3'>
        <h3 className='text-light'>Filters</h3>
        <h4 className='text-light'>Location</h4>
        <input type="text" name="" id="" onChange = {changeHandler2} />
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
            firstDisplayAddress?.map((ele)=>{
              return (
                <>
                  <div className='text-light' >{ `${ele.address1,ele.address2}`}</div>
                </>
              )
            })
            
          }
        </div>
          

    

      </div>
      <div className='right-section col-9'>
        {
          firstDisplayAddress?.length === 0  ? 
          address?.map((ele)=> {
            return (          
                <Card address={ele.address1}/>
            )
          })
          :
          firstDisplayAddress?.map((ele)=> {
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