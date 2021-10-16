import { StrictMode } from "react"; //eslint-disable-line
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"; //eslint-disable-line
import Details from "./Details"; //eslint-disable-line
import PokemonList from "./Pokemons"; //eslint-disable-line
import Type from "./Types"; //eslint-disable-line
//eslint-disable-next-line
const App = () => {
  return (
    <div>
      <Router>
        <header className="head">
          <Link to="/">
            <h1 className="head-logo" />
          </Link>
        </header>
        <Switch>
          <Route exact path="/">
            <PokemonList />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/type/:id">
            <Type />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
