import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer row'>
      {/* <div className='footer-social'></div> */}
      <div className="footer-links col-4">
        <h6>Quick Links</h6>
        <p>About</p>
        <p>FAQS</p>
        <p>Privacy Policy</p>
        <p>WTF in News</p>
        <p>Terms & Conditions</p>
        <p>Refund & Cancellation</p>
      </div>
      <div className="footer-explore col-4">
        <h6>Explore</h6>
        <p>Arena</p>
        <p>Studio</p>
        <p>Nutrition</p>
      </div>
      <div className="footer-contact col-4">
        <h6>Contact</h6>
        <p>Ro : s 1502, Amrapali silicon city</p>
        <p>Ho: C-86 B, Ground Floor, Sector 8, Noida , Uttar Pradesh , india</p>
        <p>9090639005</p>
        <p>support@wtfup.me</p>
      </div>
    </div>
  )
}

export default Footer