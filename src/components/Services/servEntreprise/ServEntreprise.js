import "./servEntreprise.css"
import React from 'react';
import { Link } from 'react-router-dom';
export default function ServEntreprise() {
    return (
        <div className="serventreprise" id="serventreprise">
            <div class="servv">
           <h1> SERVICES AUX ENTREPRISES </h1>
           <div class="btn2">
           <Link to="/contact" class="btnnn" type="button">Contactez-nous</Link>
           </div>
            </div>
            <div class="head">
                <h2>NOUS OFFRONS DIFFÉRENTS SERVICES AUX ENTREPRISES</h2>
                <p>QUELQUE SOIT LA TAILLE DE VOTRE ENTREPRISE</p>
            </div>
            <div class="boxx">
            <i class="fa fa-cogs"></i>
            <div class="esee">
                <h4>SERVICES COMPTABLES</h4>
                <p>Saisie comptable : saisie des factures d’achats et de ventes, saisie des relevés bancaires, saisie des opérations diverses (TVA...), saisie des écritures de régularisation ;Révision comptable,Élaboration des états financiers. </p>
            </div>
            </div>
            <div class="boxx2">
            <div class="boxx">
            <i class="fa fa-files-o"></i>
            <div class="esee">
                <h4>SERVICES FISCALES</h4>
                <p>Assistance en matière fiscale : conseils fiscaux (optimisation fiscale en matière d’imposition des bénéfices...), établissement des déclarations de TVA et autres déclarations fiscales, assistance en cas de contrôle fiscale </p>
            </div>
            </div>
            </div>
            <div class="boxx3">
            <div class="boxx">
            <i class="fa fa-gavel"></i>
            <div class="esee">
                <h4>SERVICES JURIDIQUES</h4>
                <p>Etablissement des procès-verbaux d’assemblées générales ordinaires (dont l’assemblée d’approbation des comptes annuels) et extraordinaires, modification des statuts, accomplissement des formalités légales, tenue des différents registres obligatoires.</p>
            </div>
            </div>
            </div>
            
            <div class="boxi">
            <i class="fa fa-male"></i>
            <div class="esee">
                <h4>SERVICES DE GESTION DES RESSOURCES HUMAINES</h4>
                <p>Saisie des opérations de paies et charges sociales. Assistance en matière sociale : choix du régime social du dirigeant, rédaction des contrats de travail, élaboration des bulletins de paie, calcul et déclaration des charges sociales, gestion des documents de sortie des salariés (reçu pour solde de tout compte, certificat de travail…)</p>
            </div>
            </div>
            <div class="boxx4">
            <div class="boxi">
            <i class="fa fa-phone"></i>
            <div class="esee">
                <h4>SECRETARIAT & ASSISTANCE À LA DIRECTION</h4>
                <p>Nous proposons une assistante de direction, qui sera chargé de l’accueil des clients par téléphone ou dans notre salle de réception. Elle sera chargé également de la tenu de agenda du directeur.</p>
            </div>
            </div>
            </div>
            <div class="boxx5">
            <div class="boxi">
            <i class="fa fa-car"></i>
            <div class="esee">
                <h4>COURSIER</h4>
                <p>Un coursier de confiance pourra aisément se charger des formalités administratives, bancaires et de tout autre activité qui ne nécessite pas la présence du directeur. </p>
            </div>
            </div>
            </div>
            <div class="foot13">
            <div class="ft">
                 <a class="copi">Copyright © SOTELCOO</a> 
                  </div>
            </div>
        </div>
    )
}
