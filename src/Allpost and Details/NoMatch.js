import { Box, Card,makeStyles } from '@material-ui/core';
import React from 'react';

const NoMatch = () => {
    const useStyles = makeStyles({
        root: {
          minWidth:700,
          minHeight:700,
          margin:120,
          textAlign:'center',  
          marginBottom:20,
          backgroundColor: "#e94560"
        },

    
      });
      const classes = useStyles();

    return (
        <div>
            <Card className={classes.root} >
                <Box justifyContent="center" display="flex">

                        
                    <div >
                        
                        <h1 style={{fontSize:170, color:'white'}}> 404 </h1>
                        <p style={{fontSize:80, color:'yellow'}}>Page Not Found</p>
                      
                     </div>
                </Box>
            </Card>   
        </div>
    );
};

export default NoMatch;