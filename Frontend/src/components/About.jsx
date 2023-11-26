import React from 'react';
import '../home/styles/style.css';
function About() {
  return (
    <div id ='about'>
   <h1 class="sub-title center-text p-7">About Us</h1>
<div class="container-bg">
  <div class="row">
   <div class="about-col-1">
    <img src="https://www.praktischarzt.de/wp-content/uploads/2023/03/Becoming-a-medical-doctor-or-physician-in-Germany.jpg" alt=""/>
   </div>

   <div class="about-col-2">
   
    <p >We strive to be a beacon of hope and healing for our community. Our mission is to provide outstanding healthcare services with a compassionate touch, tailored to the unique needs of each patient.</p>
    <a href="#" class="btn btn-primary"> More</a>
   </div>
  </div>
</div>
</div>
    
  );
}

export default About;
