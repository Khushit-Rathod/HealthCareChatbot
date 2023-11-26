import React from 'react';
import '../home/styles/style.css';
import {useNavigate} from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
function Navbar() {

  const [name,setName]=useState()
  const navigate = useNavigate()

  useEffect(()=>{axios.get('https://localhost:3001/login')
    .then(result=>{setName(result)
    console.log(name)
  })
    .catch(err=>console.log(err))
  },[name])

  return (
    <div>
      <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{background: 'linear-gradient(to right, #00FF00, #008000)'}}>
        <div className="container">
          <a className="navbar-brand" href="#">
          Wellness
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#contact">
                  Contact
                </a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link active pointer" aria-current="page" onClick={()=>navigate("/chatbot")}>
                  ChatBot
                </a>
              </li>

            </ul>
          </div>
          {/* users.map((user)=>{return }) */}
          <div className="hello">
          <button type="button" className="btn btn-warning ml-2" onClick={()=>navigate("/login")}>
              Login
              {/* <div>
              <a className="nav-link active pointer" aria-current="page" onClick={()=>navigate("/chatbot")}>
                  ChatBot
              </a>
              </div> */}
            </button>
          </div>
        </div>
      </nav>

     


    </div>
    </div>


  );
}

export default Navbar;
