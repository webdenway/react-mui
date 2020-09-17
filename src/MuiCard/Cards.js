import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';



import { Link } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    minWidth: 600,
    marginTop:12,
    marginLeft:20,
    marginBottom:10,
    backgroundColor: "#cccccc",
    textAlign:'center'
  },

  title: {
    fontSize: 14,
  },
  pos: {
    fontSize: 14,
  },
});

const Cards =  (props)=> {
  // console.log(props.postdetails)
  const {id, title} = props.postdetails;
  const classes = useStyles();


  return (
      
      <Card className={classes.root} >
      <CardContent>
      <div>
        <h6> POST NUMBER: {id}</h6>
        </div>
        <div >
         <h2> ---- POST TITLE --- </h2>
          <h4> {title}</h4> 
        </div>
 
      </CardContent>
      <CardActions>
          <Link to={"/postDescription/"+id}>Read More</Link>
      </CardActions>
    </Card>
   
    
    
  );
}

export default Cards;