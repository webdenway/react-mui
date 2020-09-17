
import React, { useEffect, useState } from 'react';
import Cards from '../MuiCard/Cards';

import Box from '@material-ui/core/Box';


const AllPost = () => {

    const [posts, setPosts] = useState([])
    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/posts')
         .then(res=>res.json())
         .then(data=>setPosts(data))
        
    }, [])
    // console.log(posts)
    
    return (
        <div style={{marginTop: 100}}>
            <Box justifyContent="center" display="flex" flexWrap="wrap" >
                
                { posts.map(post => <Cards postdetails ={post} ></Cards> )}
               
                     
            </Box>
            </div>
            
        
    );
};

export default AllPost;