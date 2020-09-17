import { Box, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileImage from './ProfileImage';



const Comment = (props) => {
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        fetch('https://api.generated.photos/api/v1/faces?api_key=EK-8Oz4GnsHLvaWgH0gWmg')
            .then(res => res.json())
            .then(data => {
                setImages(data.faces)
                
                
            })
    }, []);
    console.log(images)
  

        
    const useStyles = makeStyles({
        root: {
          minWidth:1000,
          marginTop:20,
          marginLeft:80,
          marginBottom:20,
          backgroundColor: "#cccccc"
        },

    
      });
      const classes = useStyles();
      const{name,body,email}=props.singledetails;

      return (
                    
        <div>
                {  <Card className={classes.root} >
                <Box justifyContent="center" display="flex">
                    <div>
                
                       {images.slice(8,9).map(image => <ProfileImage picture={image}></ProfileImage>)}
                    
                     
                    </div>
                    
                    <CardContent  >
                        <h5>Name: {name}</h5>
                        <h6>Email : {email}</h6>
                        <p><strong> Comment  : </strong> {body}</p>
                     </CardContent>
                </Box>
            </Card>   
                    }
        </div>
                    
               
           
             
           
        
    );
};

export default Comment;