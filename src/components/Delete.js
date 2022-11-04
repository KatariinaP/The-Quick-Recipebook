import { Container, Button, Typography } from '@mui/material';
import { Link, useHistory, useParams } from 'react-router-dom';

function Delete(props) {

const history = useHistory();
const { id } = useParams();

const recipeToDelete = props.recipes.filter((list) => {
                            return (list.id === id);
                        })[0];

const handleDelete = (e) => {

    e.preventDefault();

    let recipesDel = props.recipes.filter((list) => {
        return (list.id !== id);
    });

    props.setRecipes([...recipesDel]);

    history.push("/");
    }

    return (

        <Container maxWidth='sm'>

        <form onSubmit={handleDelete}>

            <Typography variant="h4" sx={{marginBottom : 5, marginTop : 40}}
            >Are you sure you want to remove the {recipeToDelete.name} recipe?</Typography>

            <Button 
                type="submit"
                variant="contained"
                color="success"
                sx={{marginBottom : 5, padding : 2, paddingLeft : 4, paddingRight : 4, marginLeft : 8}}
                >Delete</Button>

            <Button
                component={Link}
                to="/"
                variant="contained"
                color="error"
                sx={{marginBottom : 5, padding : 2, marginLeft : 2 }}
                >Cancel and return</Button>

        </form>

     </Container>
)
}

export default Delete;