import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import Main from "./Main";
import About from "./About";

function Home() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default Home
