import "./formation.css"
import React from 'react';
import { Link } from 'react-router-dom';


export default function Formation() {
    return (
        <div className="formation" id="formation">
            <div class="back-for">
                <h1>FORMATION</h1>
            </div>
            <div class="ktiba">
                <p>NOUS OFFRONS UNE PLATEFORME DE FORMATION EN E-LEARNING DES TALENTS ET DE RECONVERSION DES DIPLÔMÉS À LA RECHERCHE D’EMPLOIS  </p>
            </div>
            <div class="ktib2">
                <p>Les Programmes de formation pour les dirigeants et responsables concernés par la Digitalisation s’articulent  autour des disciplines suivantes : 
                    <ul>
                        <li>Data Sciences pour dirigeants</li>
                        <li>Intelligence Artificielle pour dirigeants </li>
                        <li>Analyse et Prévision des données pour dirigeants</li>
                        <li>Stratégie de digitalisation</li>
                    </ul>
                    <br/>
                    Les programmes de formation pour développeurs informatiques  s’articulent autour des disciplines suivantes :
                    <ul>
                        <li>Programmation Cloud</li>
                        <li>Programmation RPA, et Machine Learning </li>
                        <li>Programmation WEB sous Cloud</li>
                        <li>Programmation Big Data et  data sciences  </li>
                        <li>Automatisation de l’Audit, la Comptabilité et les Finances </li>
                    </ul>


                </p>
            </div>
            <div class="ktib-img">
                <p>FORMATION EN SOFT SKILLS</p>
                <img class="train" src="training.jpg" alt=""/>
            </div>
      <p class="faza">Nous mettons à votre disposition un savoir faire particulier qui vous oriente à développer et à mobiliser vos compétences naturelles autour de défis professionnels.</p>
      <div class="ktib3">
    <Link to="/contact" class="bton">Contactez-nous</Link> 
      <div class="arrow">
      <i class="fa fa-arrow-circle-right"></i>
      </div>
      
      </div>
      <div class="grid">
      <div class="item1">
          <b class="tita" >LEADERSHIP ET MANAGEMENT DES ÉQUIPES</b>
      </div>
      <div class="item2">
          <b class="tita">TECHNIQUES DE PRÉSENTATION EN PUBLIC</b>
      </div>
      <div class="item3">
          <b class="titaa">GESTION DU TEMPS ET PRIORITÉ</b>
      </div>
      <div class="item4">
          <b class="titaaa">LES TECHNIQUES DE NÉGOCIATION</b>
      </div>
      </div>
      <div class="ktiba5">
          <h2>ENTREPREUNARIAT</h2>
      </div>
      <div class="ktib-img1">
                <p>FORMATION EN ENTREPREUNARIAT</p>
                <img class="entrop" src="entrepreneur.jpg" alt=""/>
            </div>
            <p class="faza2">La formation à l’entrepreneuriat porte sur les compétences techniques nécessaires à la création, à la gestion et au développement d’une entreprise.</p>
            <div class="grid2">
      <div class="item1">
          <b class="tita" >MARKETING ET STRATÉGIE COMMERCIALE</b>
      </div>
      <div class="item2">
          <b class="tita">GESTION DE PROJETS</b>
      </div>
      <div class="item3">
          <b class="titaa1">FINANCE</b>
      </div>
      <div class="item4">
          <b class="titaa2">RESSOURCES HUMAINES</b>
      </div>
      </div>
      <div class="succes">
      <div class="ktib3">
      <Link to="/contact" class="bton" type="button">Contactez-nous</Link>
      <div class="arrow">
      <i class="fa fa-arrow-circle-right"></i>
      </div>
      
      </div>
      </div>
      <div class="foot2">
      <div class="ftt">
                 <a class="copi">Copyright © SOTELCOO</a> 
                  </div>
      </div>
        </div>
    )
}
