import { Container } from '@mui/material';
import StartAdd from "./components/StartAdd";
import Delete from './components/Delete';
import Edit from './components/Edit';
import List from './components/List';
import {HashRouter as Router, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const [recipes, setRecipes] = useState([]);

  const saveRecipes = () => {

    localStorage.setItem("listOfRecipes", JSON.stringify(recipes));

  }

  const loadRecipes = () => {

    if (localStorage.getItem("listOfRecipes")) {

      setRecipes(JSON.parse(localStorage.getItem("listOfRecipes")));

    } else {

      setRecipes([]);
    }

  }

  useEffect(() => {

    loadRecipes();

  }, []);

  useEffect(() => {

    saveRecipes();

  }, [recipes]); 
  


  return (
    <Router>
      <Container>

        <Route path="/" exact>
          <List recipes={recipes} setRecipes={setRecipes} saveRecipes = {saveRecipes} />
        </Route>

        <Route path="/add">
          <StartAdd recipes={recipes} setRecipes={setRecipes}/>
        </Route>

        <Route path="/delete/:id">
          <Delete recipes={recipes} setRecipes={setRecipes}/>
        </Route>

        <Route path="/edit/:id">
          <Edit recipes={recipes} setRecipes={setRecipes}/>
        </Route>

      </Container>
    </Router>
  );
}

export default App;