import './Navbar.css';
import logo from '../../logo.png'
import LoginRegister from '../loginReg/LoginRegister'
import Home from '../home/Home'
import Sell from '../sell/Sell'
import Listing from '../catalog/Listing'
import { Route, Link } from "react-router-dom";
import React, { useState } from 'react';





const Navigator = () => {
  const [change, setchange] = useState('');
  //const {fname,valid} = useContext(AppContext);
  //console.log(fname);
  const clear =() => {
    console.log("hello");
    sessionStorage.clear()
    localStorage.clear()
    valid = false
    setchange(' ')
}
  let valid = false
  if(localStorage.getItem('email')!=null){
    sessionStorage.setItem('email',localStorage.getItem('email'))
  };
  if(sessionStorage.getItem('email')!=null){
    valid = true
  }
    return (
        <>
        <div className="navbar"> 
        <div className='nav-contain'>
  <ul> 
  <li><img src={logo} alt="Logo" width='23px'/></li>
	<li><Link to="/" className="ref" >Home</Link></li> 
	<li><Link to="/boats" className="ref">Boats for Sale</Link></li> 
	{!valid ? (<li className='right'><Link to="/register" className="ref ">Sign-in</Link></li>):<>
    <li><Link to="/sell" className="ref">Sell A Boat</Link></li>
    {/*<li><Link to="/compare" className="ref">Compare</Link></li>*/}
    <li className='right'><Link to="/" className="ref " onClick={clear}>Log Out</Link></li>
  </>}
  </ul> 
</div>
</div> 
  <div>  
    <Route exact path="/" component={Home} />
    <Route path="/boats" component={Listing} />
    <Route path="/sell" component={Sell} />
    <Route path="/register" component={LoginRegister} />
    {/*
    <Route path="/compare" component={compare} />
    */}
  </div>

        </>
    );
}

export default Navigator;