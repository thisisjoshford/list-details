import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import CharacterList from '../../containers/CharacterList/CharacterList';
import CharacterDetails from '../../containers/CharacterDetails/CharacterDetails';
import './App.css';

export default function App() {
  return ( 
    <>
      <header>
        <img className="imgLogo" src="main.png"/>
      </header>
      <Router>
        <Link to="/">HOME</Link>
        <Switch>
          <Route exact path="/details/:charName" component={CharacterDetails}/>
          <Route exact path="/" component={CharacterList} />
        </Switch>
      </Router>
    </>
  );
} 
