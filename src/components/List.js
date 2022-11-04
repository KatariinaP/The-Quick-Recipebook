import { Container, Button,List, ListItem, ListItemIcon, IconButton,ListItemText,Typography,
  ListItemButton, Collapse } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Listing(props) {
  const [open, setOpen] = useState({});

  const handleClick = (id) => {
    setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

return (
  <Container>

  <Typography variant="h3" sx={{marginBottom : 5, marginTop : 10}}>Your own quick recipe book</Typography>
  <Typography variant="h5" sx={{marginBottom : 5}}>An easy way for homecooks to remember those yummy and simple dishes that you've made before</Typography>

    <List sx={{ width: '100%', heigth: '50%'}}>

        { props.recipes.sort( (a,b) => {
        return (b.time) - (a.time);})

        .map( (list, idx) => {

         return (

          <ListItem key={idx}>
            <List sx={{ width: '100%', marginTop: 2, marginBottom: 2}}>
            <ListItemButton onClick={() => handleClick(list.id)}>
              <ListItemIcon>
                <IconButton 
                  edge="end"
                  component={Link}
                  to={`/delete/${list.id}`} >
                   <DeleteIcon fontSize='large' sx={{paddingLeft: 1, paddingRight: 2}}/>
                </IconButton>
              <ListItemIcon>
                <IconButton
                    edge="end"
                    component={Link}
                    to={`/edit/${list.id}`} >
                    <EditIcon fontSize='large' color="info" sx={{paddingLeft: 2, paddingRight: 4}} />
                </IconButton>
              </ListItemIcon>
              </ListItemIcon>
          <ListItemText primary={list.name} secondary={list.dish} />
          {open[list.id] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
  
          <Collapse in={open[list.id]} timeout="auto" unmountOnExit>
            <List sx={{ background: '#E8FAE7', paddingLeft: 15}}>
              <ListItem>
                <ListItemText primary={list.protein} secondary="Proteins" />
              </ListItem>
              <ListItem>
                <ListItemText primary={list.carb} secondary="Carbs" />
              </ListItem>
              <ListItem>
                <ListItemText primary={list.veggie} secondary="Vegetables" />
              </ListItem>
              <ListItem>
                <ListItemText primary={list.flavor} secondary="Flavors" />
              </ListItem>
              <ListItem>
                <ListItemText primary={list.prep} secondary="Preparation" />
              </ListItem>
              <ListItem>
                <ListItemText primary={list.extra} secondary="Extras" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </ListItem>

              );
      } ) }
     
    </List>   

    <Button
    component={Link}
    to="/add"
    variant="contained"
    color="success"
    fullWidth
    sx={{marginBottom : 5, padding : 2}}
  >Add a new recipe</Button>

  </Container>
    )
}

export default Listing;