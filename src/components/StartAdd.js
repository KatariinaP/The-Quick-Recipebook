import { useRef } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function StartAdd(props) {

const recipe = useRef();
const proteins = useRef();
const carbs = useRef();
const veggies = useRef();
const flavors = useRef();
const prep = useRef();
const extras = useRef();
const dishtype = useRef();
const history = useHistory();

const formHandler = (e) => {

    e.preventDefault();

    let newRecipe = {
        id : uuid(),
        name : recipe.current.value,
        protein : proteins.current.value,
        carb : carbs.current.value,
        veggie : veggies.current.value,
        flavor : flavors.current.value,
        prep : prep.current.value,
        dish : dishtype.current.value,
        extra : extras.current.value
        }

    props.setRecipes([...props.recipes, newRecipe]);

    history.push("/"); 
    }

    return (

    <Container>

      <Typography variant="h3" sx={{marginBottom : 5, marginTop : 10}}>Add your quick recipe!</Typography>
      <Typography variant="h5" sx={{marginBottom : 5}}>For an quick and easy recipe you just need to know the essentials</Typography>

        <form onSubmit={formHandler}>

            <TextField 
                label="Name of the recipe"
                helperText="Something to remember the recipe by... like Grandmas Beefstew or Hangover Hamburgers!"
                variant="outlined"
                fullWidth
                inputRef={recipe}
                sx={{paddingBottom : 3}}
            />
            <TextField 
                label="Type dish"
                helperText="Is it a main course or a side? Or a salad or a snack? You decide!"
                variant="outlined"
                fullWidth
                inputRef={dishtype}
                sx={{paddingBottom : 3}}
            />

            <TextField 
                label="Proteins"
                helperText="Gotta have some protein! Or not, you decide. This is your thing"
                variant="outlined"
                fullWidth
                inputRef={proteins}
                sx={{paddingBottom : 3}}
            />
            <TextField 
                label="Carbs"
                helperText="Potato, pasta, rice? Yes we love them all."
                variant="outlined"
                fullWidth
                inputRef={carbs}
                sx={{paddingBottom : 3}}
            />
            <TextField 
                label="Vegetables"
                helperText="Vegetables is in plural so you better have more than one."
                variant="outlined"
                fullWidth
                inputRef={veggies}
                sx={{paddingBottom : 3}}
            />
            <TextField 
                label="Flavour or sauce?"
                helperText="What inspires the flavours for this dish?"
                variant="outlined"
                fullWidth
                inputRef={flavors}
                sx={{paddingBottom : 3}}
            />
            <TextField 
                label="How to cook it?"
                helperText="Pan, oven, grill or raw?"
                variant="outlined"
                fullWidth
                inputRef={prep}
                sx={{paddingBottom : 3}}
            />
            <TextField 
                label="Extras"
                helperText="Something else thats good to know?"
                variant="outlined"
                fullWidth
                inputRef={extras}
                sx={{paddingBottom : 3}}
            />


            <Button 
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                sx={{marginBottom : 5, padding : 2}}
                >Add</Button>

        </form>

        <Button
        component={Link}
        to="/"
        variant="contained"
        fullWidth
        color="success"
        sx={{marginBottom : 5, padding : 2}}
        >List of recipes</Button>

    </Container>
    )
}

export default StartAdd;