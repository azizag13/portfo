import "./home.css"
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
       <div className="home"> 
      
            <div className="box">
                   <div class="flex_box">
                <h1 className="h1" >_______Votre Partenaire en Finance et Marketing Digital et Informatique Décisionnel___________________    </h1>
                <h2>SOTELCO is a platform for innovative digitalization services for Finance, e-commerce, e-learning and e-health and Industry 4.0</h2>
                </div>
            </div>
            <div className="tex">
                <h2>NOS SERVICES</h2>
            </div>
               <div class="flex-container">
             <div class="dev">  <Link to="/developpement-informatique">PLATFORME DE DEVELOPPEMENT INFORMATIQUE</Link> </div>
               <div class="cowor"> <Link to="/coworking-space" >COWORKING SPACE & CENTRE DE LOISIR</Link> </div>
              <div class="start"> <Link to ="/incubator-program">ACCÉLÉRATEURS DE START-UPS</Link> </div>
               <div class="form"> <Link to="/formation" >CENTRE DE FORMATION ET DE E-LEARNING </Link> </div>
          </div>
          <div class="introduction">
              <div class="part1">
              <h2>DÉVELOPPEMENT INFORMATIQUE </h2>
              <p>En partenariat avec les grandes plateformes internationales, Sotelco vous accompagne dans l'externalisation en nearshoring de la digitalisation de tout ou partie de vos activités: Outils d’aide à la décision, marketing, Finance, et industrie 4.0 : facturation, émission de devis, gestion de la production, CAO-DAO, études et méthodes, contrôle de la qualité, logistique et gestion des expéditions.</p>
              </div>
              <img className="photo" src="a1.jpg" alt=""/>
              <img className="photo2" src="a2.jpg" alt=""/>

              <div className="introoo2">
                  <h1>LE COWORKING</h1> 
                  <p>
Sotelco, a développé un espace coworking de travail partagé sur site et virtuel. Il s’adresse aux investisseurs étrangers  qui démarrent leur activité et aux professionnels  indépendants, développeurs informatiques,  consultants en entreprenariat, digitalisation, économètres, avocats et experts comptables
<br/>
Pour les investisseurs étrangers, il leur permettra de  réduire leurs couts de démarrage et bénéficier de notre accompagnement pour réaliser une immersion rapide et sans risques dans l’environnement des affaires en Tunisie  
<br/>
Pour les professionnels indépendants, il leur permettra de se construire un réseau et des opportunités en Tunisie et sur le marché international
<br/>
L’espace coworking avec des tarifs à la semaine et à la journée, vous permettra de rester libre et de ne pas vous engager sur le long terme.
<br/>
La solution du coworking, également idéale pour vos besoins de télétravail (travail à distance) ponctuels ou réguliers, vous donne en outre accès à de nombreux avantages : large accessibilité horaire, connexion Internet très haut débit, salles de réunion en réservation libre, espaces de détente...
SOTELCO, vous offre les prestations suivantes :
<ul>
<li>CYBER CAFE ET RESTAURATION </li>
<li>EVENEMENTIELS </li>
<li>SPORT & ROBOTIQUE </li>
</ul>
</p>
<div className="intro">
    <p >
    ACCÉLÉRATEURS DE START-UPS
Sotelco, vous accompagne tout au long des différentes phases de votre développement :
<ul>
          <li> Early stage de conception et développement de votre idée, </li>
          <li>Incubation et recherche des premiers clients </li>
          <li> Phase de scalabilité par la mise à grande échelle de votre production </li>
</ul>
    </p>
    <img class="photo3" src="a3.jpg" alt="" />
</div>
    
           <div className="parag">
               <h3 className="test">Notre centre de formation et de e-learning </h3>
               <br/>
               <p class="test12">SOTELCO, VOUS OFFRE EN PRÉSENTIELS ET E-LEARNING LA FORMATION TECHNIQUE ET EN SOFT SKILL  NÉCESSAIRE POUR LE DÉVELOPPEMENT DE VOS TALENTS </p>
           </div>
           <div class="card-deck">
           <div class="card">
               <div class="card-image"></div>
               <div class="card-text">
                   <span class="date">02 JUL 12:00 AM</span>
                   <h2>LE NETWORKING</h2>
                   <p class="per">Comment développer ses capacités de networking</p>
                   <div className="card-link">
                   <a className="link1" href="#link">Link</a>
                   <br/>
                   <a className="info" href="#info">Info</a>
                   </div>
                   
               </div>
               <div class="card-media">
                   <ul>
                       <li><a href="#" class="fa fa-facebook"></a></li>
                       <li><a href="#" class="fa fa-twitter"></a></li>
                       <li><a href="#" class="fa fa-google"></a></li>
                   </ul>
                   
               </div>
           </div>
           <div class="card">
           <img className="jj" src="bp.jpg" />
               <div class="card-text">
                   <span class="date">05 SEP 12:00 AM</span>
                   <h2>BUSINESS PLAN</h2>
                   <p class="per">Comment créer un business plan.</p>
                   <div className="card-link">
                   <a className="link1" href="#link">Link</a>
                   <br/>
                   <a className="info" href="#info">Info</a>
                   </div>
                   
               </div>
               <div class="card-media">
                   <ul>
                       <li><a href="#" class="fa fa-facebook"></a></li>
                       <li><a href="#" class="fa fa-twitter"></a></li>
                       <li><a href="#" class="fa fa-google"></a></li>
                   </ul>
                   
               </div>
           </div>
           <div class="card">
           <img className="jj" src="etrp.jpg" />
               <div class="card-text">
                   <span class="date">02 JUL 12:00 AM</span>
                   <h2 class="spacee" >ENTREPRENEURIAT</h2>
                   <p class="per">comment démarrer une entreprise</p>
                   <div className="card-link">
                   <a className="link1" href="#link">Link</a>
                   <br/>
                   <a className="info" href="#info">Info</a>
                   </div>
                   
               </div>
               <div class="card-media">
                   <ul>
                       <li><a href="#" class="fa fa-facebook"></a></li>
                       <li><a href="#" class="fa fa-twitter"></a></li>
                       <li><a href="#" class="fa fa-google"></a></li>
                   </ul>
                   
               </div>
           </div>
           </div>
           
           <div className="location">
               <h1>OÙ NOUS TROUVER</h1>
               <p><iframe className="gps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12762.795216942333!2d10.1914538!3d36.8975531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42e63eff2ca14773!2sSOTELCO!5e0!3m2!1sfr!2stn!4v1629988177987!5m2!1sfr!2stn" allowfullscreen="" loading="lazy"></iframe></p>
               <p class="fixe">Nous visiter : 12 Rue Newton, ZI Chotrana II,Technopole El Ghazela, Tunis, Tunisie</p>
               <p class="tells">Téléphone : 22971532</p>
           </div>
           <div class="homie">
           <div class="feet">
                 <a class="copii">Copyright © SOTELCOO</a> 
                  </div>
                  </div>
              </div>
              
          </div>
  </div>

                     
    )
}
