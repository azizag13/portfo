import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div className="navbar">
            
         <img className="left"  src="logo.png" width="225" height="150" alt="" title="" />
            
         <div className="nav-bar">
           <Link to ="/" >HOME</Link>
         </div>
         <div class="nav-bar">
           <Link to="/developpement-informatique">DÉVELOPPEMENT INFORMATIQUE</Link>
         </div>
         <div class="nav-bar">
           <Link to="/nos-solutions">NOS SOLUTIONS</Link>
         </div>
         <div class="nav-bar">
           <Link to="/incubator-program">ACCÉLÉRATEURS DE START-UP</Link>
         </div>
         <div class="dropdown">
    <button class="dropbtn">SERVICES  
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <Link to="evenements"> ÉVÉNEMENTS</Link> 
      <Link to="/coworking-space">COWORKING SPACE</Link>
      <Link to="/formation">FORMATION</Link>
      <Link to="servicesauxentreprises">SERVICES AUX ENTREPRISES</Link>
    </div>
  </div> 
  <div class="nav-bar">
    <Link to="/contact">CONTACT</Link>
  </div>
        
        </div>
        
            
            
        
    )
}
