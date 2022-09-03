import React from 'react';
import "./Card.css";

const Card = ({address}) => {
  console.log(address)
  return (
    <div className='card row'>
      <div className="col-5">
        <img src="https://api.time.com/wp-content/uploads/2020/03/gym-coronavirus.jpg" alt="" srcset="" className='img-fluid'/>
      </div>
      <div className="col-7">
        <div className='card-body'>
          <div className='card-about'>
            <h3>WTF:Hybrid Gym</h3>
            <p>{ address }</p>
            <p>3.18 minutes away | 2.12km</p>
          </div>

          <div className='book-show'>
            <h3 className='text-warning card-text'>3600 for 3 Months</h3>
            <div className="btn btn-danger">Book Now</div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card