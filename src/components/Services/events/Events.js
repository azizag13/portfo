import "./events.css"
import React from 'react';
import { Link } from 'react-router-dom';

export default function Events() {
    return (
        <div className="events" id="events">
            <div class="evenn">
                <h1>CRÉER VOS ÉVÉNEMENTS, VOS SÉMINAIRES ET VOS FORMATIONS AVEC NOUS</h1>
                <p>Profitez de nos espaces pour créer vos événements, vos séminaires et vos formations à moindre coût. Bénéficiez de notre infrastructure et de nos équipements pour mener à bien vos projets de formation.</p>
                <Link to="/contact" class="btnnn" type="button">Contactez-nous</Link>
            </div>
            <div class="tittr">
                <h2>NOS ÉVÉNEMENTS EN COURS</h2>
                <h3>PRÉSENTATION DES ÉVÉNEMENTS ET FORMATIONS EN COURS DANS NOS ESPACES</h3>
            </div>
            
            <div class="flex-tab">
           <div class="items">
               <div class="timee">
               <ul>
                 <li><span class="day">02</span></li> 
                <li><span class="month">JUL</span></li>  
                 <li><span class="time">12:00 AM</span></li>
                 </ul>
               
           </div>
           <div class="titlee">
               
               <h3>YOUR EVENT NAME</h3>
               <p>Write a description of your event here.</p>
               
               
           </div>
           <div class="infos">
           <a href="#" class="inf"><span class="fa fa-globe"></span> Link</a>
           <a href="#" class="inf"><span class="fa fa-info-circle"></span> Info</a>
           </div>
           <div class="icons">
           <ul>
                       <li class="facebook"><a href="#" class="fa fa-facebook"></a></li>
                       <li class="twitter"><a href="#" class="fa fa-twitter"></a></li>
                       <li class="google"><a href="#" class="fa fa-google"></a></li>
                   </ul>
           </div>
           </div>
        
           <div class="items">
                <div class="timee">
               <ul>
                 <li><span class="day">05</span></li> 
                <li><span class="month">SEP</span></li>  
                 <li><span class="time">12:00 AM</span></li>

                 </ul>
               
           </div>
           <div class="titlee">
               
               <h3>YOUR EVENT NAME</h3>
               <p>Write a description of your event here.</p>
               
               
           </div>
           <div class="infos">
           <a href="#" class="inf"><span class="fa fa-globe"></span> Link</a>
           <a href="#" class="inf"><span class="fa fa-info-circle"></span> Info</a>
           </div>
           <div class="icons">
           <ul>
                       <li class="facebook"><a href="#" class="fa fa-facebook"></a></li>
                       <li class="twitter"><a href="#" class="fa fa-twitter"></a></li>
                       <li class="google"><a href="#" class="fa fa-google"></a></li>
                   </ul>
           </div>
            
            
        </div>
        
           <div class="items">
               <div class="timee">
               <ul>
                 <li><span class="day">02</span></li> 
                <li><span class="month">JUL</span></li>  
                 <li><span class="time">12:00 AM</span></li>

                 </ul>
                 </div>
               
           
           <div class="titlee">
               
               <h3>YOUR EVENT NAME</h3>
               <p>Write a description of your event here.</p>
               
               
           </div>
           <div class="infos">
           <a href="#" class="inf"><span class="fa fa-globe"></span> Link</a>
           <a href="#" class="inf"><span class="fa fa-info-circle"></span> Info</a>
           </div>
           <div class="icons">
           <ul>
                       <li class="facebook"><a href="#" class="fa fa-facebook"></a></li>
                       <li class="twitter"><a href="#" class="fa fa-twitter"></a></li>
                       <li class="google"><a href="#" class="fa fa-google"></a></li>
                   </ul>
           </div>
           </div>
            </div>
            <p class="pp">
            With Theme Clean you get a list of your events with date, time, description, etc. Select the simple or image mode and edit your content.
         <br/>  You can link your events to your favorite social network.
            </p>
           < div class="flexes">
            <div class="itemss">
               <div class="timeee">
               <ul>
                 <li><span class="day">18</span></li> 
                <li><span class="month">JUL</span></li>  
                 <li><span class="time">ALL DAY</span></li>

                 </ul>
                 </div>
            
             <img src="ii.jpg" alt="" class="img-fluid"/>
           
           <div class="titleee">
               
               <h3>YOUR EVENT NAME</h3>
               <p>Write a description of your event here.</p>
               
               
           </div>
           <div class="infoss">
           <a href="#" class="inff"><span class="fa fa-globe"></span> Link</a>
           <a href="#" class="inff"><span class="fa fa-info-circle"></span> Info</a>
           </div>
           <div class="iconss">
           <ul>
                       <li class="facebook"><a href="#" class="fa fa-facebook"></a></li>
                       <li class="twitter"><a href="#" class="fa fa-twitter"></a></li>
                       <li class="google"><a href="#" class="fa fa-google"></a></li>
                   </ul>
           </div>
           </div>
           
           <div class="itemss">
               <div class="timeee">
               <ul>
                 <li><span class="day">18</span></li> 
                <li><span class="month">JUL</span></li>  
                 <li><span class="time">ALL DAY</span></li>

                 </ul>
                 </div>
            <div class="img-fluid">
                 <i class="fa fa-5x fa-calendar"></i>
                 </div>
           <div class="titleee">
               
               <h3>YOUR EVENT NAME</h3>
               <p>Write a description of your event here.</p>
               
               
           </div>
           <div class="infoss">
           <a href="#" class="inff"><span class="fa fa-globe"></span> Link</a>
           <a href="#" class="inff"><span class="fa fa-info-circle"></span> Info</a>
           </div>
           <div class="iconss">
           <ul>
                       <li class="facebook"><a href="#" class="fa fa-facebook"></a></li>
                       <li class="twitter"><a href="#" class="fa fa-twitter"></a></li>
                       <li class="google"><a href="#" class="fa fa-google"></a></li>
                   </ul>
           </div>
           </div>
           </div>
           <div class="ft">
                 <a class="copi">Copyright © SOTELCOO</a> 
                  </div>
            </div>               
        
        
        
        
    )
}
