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
    // console.log(images)
    
    const picture = images.map(image=>(
        <img src={image.urls[4][512]} style={{borderRadius:100, height:100,marginTop: 60, marginLeft:15}} alt="img"/>
    
        ))
    const randomNum = Math.floor(Math.random() * picture.length);
  

        
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
                    <div >
                
                       {/* {images.map(image => <ProfileImage picture={image}></ProfileImage>)} */}
                      { picture[randomNum]}
                     
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