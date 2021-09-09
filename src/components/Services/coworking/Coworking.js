import "./coworking.css"
import React from 'react';
import { Link } from 'react-router-dom';


export default function Coworking() {
  
    return (
        <div className="coworking" id="coworking">
            <div class="cowork">
                <h1>___TRAVAILLER n'a jamais été aussi agréable___</h1>
                <p>Nous offrons des  open spaces bien équipés et partagés où Start-ups, investisseurs étrangers, et consultants collaborent pour une meilleure productivité</p>
                <Link to="/contact" class="btnnn" type="button">Contactez-nous</Link>
            </div>
            <div class="nos-serv">
                <h3>NOS SERVICES</h3> 
                <div class="flex-photoo">
                <i class="fa fa-car" ></i>
                <i class="fa fa-home"></i>
                <i class="fa fa-glass"></i>
                <i class="fa fa-handshake-o"></i>
                <i class="fa fa-users"></i>
                <div class="namee">
               <a class="placee"> <b>PLACES DE PARKING RÉSERVÉES</b></a>
              <a class="ana">  <b >ACCÉS ESPACE COMMUN</b> </a>
               <a class="kitchen"> <b>KITCHENETTE ET ESPACE DE RESTAURATION*</b> </a>
               <a class="fi"> <b >ESPACE D'ACCUEIL ET DE RECEPTION</b> </a>
             <a class="ee">  <b >SALLES DE RÉUNION</b></a>
            </div>




                </div>
                <div class="flex-photoo">
                <i class="fa fa-graduation-cap"></i>
                <i class="fa fa-internet-explorer"></i>
                <i class="fa fa-trash"></i>
                <i class="fa fa-key" ></i>
                <i class="fa fa-envelope-o"></i>
                <div class="namee">
                <a class="formi"> <b>SALLES DE FORMATION</b></a>
              <a class="ani">  <b >INTERNET À TRÈS HAUT DÉBIT</b> </a>
               <a class="kitc"> <b>ENTRETIEN DES LOCAUX</b> </a>
               <a class="fe"> <b >ESPACE SÉCURISÉ</b> </a>
             <a class="eee">  <b >GESTION DE VOTRE COURIER ET COLIS*</b></a>
                </div>
                </div>

               
        </div>
        <div class="partt2">
            <h3>NOS ÉVÉNEMENTS </h3>
            <p>PAR ET POUR NOTRE COMMUNAUTÉ</p>
            <div class="flex-tabss">
           <div class="itemm">
               <div class="timeisit">
               <ul>
                 <li><span class="day">02</span></li> 
                <li><span class="month">JUL</span></li>  
                 <li><span class="time">12:00 AM</span></li>
                 </ul>
               
           </div>
           <div class="titll">
               
               <h3>LE NETWORKING</h3>
               <p>Comment développer ses capacités de networking</p>
               
               
           </div>
           <div class="infu">
           <a href="#" class="infx"><span class="fa fa-globe"></span> Link</a>
           <a href="#" class="infx"><span class="fa fa-info-circle"></span> Info</a>
           </div>
           <div class="iconnn">
           <ul>
                       <li class="facebook"><a href="#" class="fa fa-facebook"></a></li>
                       <li class="twitter"><a href="#" class="fa fa-twitter"></a></li>
                       <li class="google"><a href="#" class="fa fa-google"></a></li>
                   </ul>
           </div>
           </div>
        
           <div class="itemm">
                <div class="timeisit">
               <ul>
                 <li><span class="day">05</span></li> 
                <li><span class="month">SEP</span></li>  
                 <li><span class="time">12:00 AM</span></li>

                 </ul>
               
           </div>
           <div class="titll">
               
               <h3>BUSINESS PLAN</h3>
               <p>Comment créer un business plan.</p>
               
               
           </div>
           <div class="infu">
           <a href="#" class="infx"><span class="fa fa-globe"></span> Link</a>
           <a href="#" class="infx"><span class="fa fa-info-circle"></span> Info</a>
           </div>
           <div class="iconnn">
           <ul>
                       <li class="facebook"><a href="#" class="fa fa-facebook"></a></li>
                       <li class="twitter"><a href="#" class="fa fa-twitter"></a></li>
                       <li class="google"><a href="#" class="fa fa-google"></a></li>
                   </ul>
           </div>
            
            
        </div>
        
           <div class="itemm">
               <div class="timeisit">
               <ul>
                 <li><span class="day">02</span></li> 
                <li><span class="month">JUL</span></li>  
                 <li><span class="time">12:00 AM</span></li>

                 </ul>
                 </div>
               
           
           <div class="titll">
               
               <h3>ENTREPRENEURIAT</h3>
               <p>Comment démarrer une entreprise</p>
               
               
           </div>
           <div class="infu">
           <a href="#" class="infx"><span class="fa fa-globe"></span> Link</a>
           <a href="#" class="infx"><span class="fa fa-info-circle"></span> Info</a>
           </div>
           <div class="iconnn">
           <ul>
                       <li class="facebook"><a href="#" class="fa fa-facebook"></a></li>
                       <li class="twitter"><a href="#" class="fa fa-twitter"></a></li>
                       <li class="google"><a href="#" class="fa fa-google"></a></li>
                   </ul>
           </div>
           </div>
            </div>
            <div className="locationn">
               <h1>OÙ NOUS TROUVER</h1>
               <p><iframe className="gps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12762.795216942333!2d10.1914538!3d36.8975531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42e63eff2ca14773!2sSOTELCO!5e0!3m2!1sfr!2stn!4v1629988177987!5m2!1sfr!2stn" allowfullscreen="" loading="lazy"></iframe></p>
               <p class="mob">Nous visiter : 12 Rue Newton, ZI Chotrana II,Technopole El Ghazela, Tunis, Tunisie</p>
               <p class="mob">Téléphone : 22971532</p>
           </div>
           <div class="feet">
                 <a class="copii">Copyright © SOTELCOO</a> 
                  </div>
        </div>
        </div>
      
    )

}

