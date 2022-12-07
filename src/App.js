import './App.css';
import Pokedex from "./Pages/pokedex";
import ListingPokemon from "./Pages/listingPokemon";
import ManagePokemon from "./Pages/managePokemon";
import Home from "./Pages/home";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";

function App(props) {
  return (
  <Router>
    <nav>
      <ul>
          <li><Link to="/">Acceuil Projet Pokemon</Link></li>
          <li><Link to="/ListingPokemon">ListingPokemon</Link></li>
          <li><Link to="./Pages/ManagePokemon">ManagePokemon</Link></li>
          <li><Link to="./Pages/Pokedex">Pokedex</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/"> {/*ici on met l'URL dans le navigateur*/}
        <Home /> {/*ici on donne la page à afficher en fonction de cette URL*/}
      </Route>
      <Route path="/ListingPokemon">
        <ListingPokemon />
      </Route>
      <Route path="/ManagePokemon">
        <ManagePokemon />
      </Route>
      <Route path="/Pokedex">
        <Pokedex />
      </Route>
    </Switch>
  </Router>   
    
  );
}

export default App;
