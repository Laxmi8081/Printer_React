// Home.js
import React from 'react';
import about from '../about.jpg';
import '../style.css';
import Footer from './Footer';

const Home=()=> {
  return (
    <div>
       <img src={about} alt="Gemiini Logo" className="paypal-logo" />
         <h1>Contact For Support </h1>
         
         
         <a href="tel:+1-877-507-7138" className="call-button">+1-877-507-7138</a>
    
	      <div id="flight-booking">
          <a href="tel:+1-877-507-7138" className="call-button">Contact Us</a>
           <h1>Contact Now - 1-877-507-7138</h1>
           <a href="tel:1-877-507-7138" className="call-button"> Contact Us - 1-877-507-7138</a>
         
          </div>
   <Footer/>
    </div>
  );
}

export default Home;
