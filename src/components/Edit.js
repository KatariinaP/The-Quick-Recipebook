import { useRef } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { Link, useHistory, useParams } from 'react-router-dom';


function Edit(props) {

const editRecipe = useRef();
const editProteins = useRef();
const editCarbs = useRef();
const editVeggies = useRef();
const editFlavors = useRef();
const editPrep = useRef();
const editExtras = useRef();
const editDishtype = useRef();
const history = useHistory();
const { id } = useParams();

const recipeToEdit = props.recipes.filter((list) => {
    return (list.id === id);
  }
  )[0];

const recipeOld = props.recipes.filter((list) => {
  return (list.id === id);
})[0];

const editSubmit = (e) => {

    e.preventDefault();

    let otherRecipes = props.recipes.filter((list) => {
      return (list.id !== id);
  });

    let newEditedRecipe = {
      id : id,
      name : editRecipe.current.value,
      protein : editProteins.current.value,
      carb : editCarbs.current.value,
      veggie : editVeggies.current.value,
      flavor : editFlavors.current.value,
      prep : editPrep.current.value,
      dish : editDishtype.current.value,
      extra : editExtras.current.value
    } 

    props.setRecipes([...otherRecipes, newEditedRecipe]);

    history.push("/");
}

    return (

      <Container>

      <Typography variant="h3" sx={{marginBottom : 5, marginTop : 10}}>Edit the {recipeToEdit.name} recipe</Typography>

            <form onSubmit={editSubmit}>

              <TextField 
              defaultValue={recipeOld.name} 
              helperText="Name of the recipe"
              variant="outlined"
              fullWidth={true}
              inputRef={editRecipe}
              sx={{paddingBottom : 3}}
               />
            <TextField 
              defaultValue={recipeOld.dish}
              helperText="Type dish"
              variant="outlined"
              fullWidth={true}
              inputRef={editDishtype}
              sx={{paddingBottom : 3}}
               />

            <TextField 
              defaultValue={recipeOld.protein}
              helperText="Proteins"
              variant="outlined"
              fullWidth={true}
              inputRef={editProteins}
              sx={{paddingBottom : 3}}
               />
            <TextField 
              defaultValue={recipeOld.carb}
              helperText="Carbs"
              variant="outlined"
              fullWidth={true}
              inputRef={editCarbs}
              sx={{paddingBottom : 3}}
              />
            <TextField 
              defaultValue={recipeOld.veggie}
              helperText="Vegetables"
              variant="outlined"
              fullWidth={true}
              inputRef={editVeggies}
              sx={{paddingBottom : 3}}
              />
            <TextField 
              defaultValue={recipeOld.flavor}
              helperText="Flavour and/or sauce"
              variant="outlined"
              fullWidth={true}
              inputRef={editFlavors}
              sx={{paddingBottom : 3}}
              />
            <TextField 
              defaultValue={recipeOld.prep}
              helperText="How to cook it"
              variant="outlined"
              fullWidth={true}
              inputRef={editPrep}
              sx={{paddingBottom : 3}}
              />

            <TextField 
              defaultValue={recipeOld.extra}
              helperText="Extras"
              variant="outlined"
              fullWidth={true}
              inputRef={editExtras}
              sx={{paddingBottom : 3}}
              />

            <Button 
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              sx={{marginBottom : 5, padding : 2}}
              >Edit and save</Button>

            </form>

        <Button
          component={Link}
          to="/"
          variant="contained"
          fullWidth
          color="error"
          sx={{marginBottom : 5, padding : 2}}
          >Cancel and return</Button>

    </Container>
    )
}

export default Edit;