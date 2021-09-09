import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Solutions from './components/solutions/Solutions';
import startup from './components/startup/startup';
import Devlopinfo from "./components/devlop.info/Devlopinfo";
import Events from './components/Services/events/Events';
import Coworking from './components/Services/coworking/Coworking';
import Formation from './components/Services/formation/Formation';
import ServEntreprise from './components/Services/servEntreprise/ServEntreprise';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
     
        <Switch>
        <Route path="/developpement-informatique"  component={Devlopinfo} />
        <Route path="/" exact component={Home} />
        <Route path="/nos-solutions" component={Solutions} />
        <Route path="/incubator-program" component={startup} />
        <Route path="/evenements" component={Events} />
        <Route path="/coworking-space" component={Coworking} />
        <Route path="/formation" component={Formation} />
        <Route path="/servicesauxentreprises" component={ServEntreprise} />
        <Route path="/contact" component={Contact} />
        </Switch>
        

     </Router>
    </div>
    
    
  );
}

export default App; 
