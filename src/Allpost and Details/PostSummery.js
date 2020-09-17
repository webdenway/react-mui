
import { Card, CardContent } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Comment from './Comment';








const PostSummery = () => {
        const { postId } = useParams();
        const [posts, setPosts]= useState([]);
        useEffect(() => {
            
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                .then(res => res.json())
                .then(data => {
                    setPosts(data)
                })
        }, []);
        const { title, body, id } = posts;

    //    console.log(posts)

       const [comments, setComments] = useState([]);
       useEffect(()=>{
           fetch( `https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
           .then(response=>response.json())
           .then(data=>setComments(data))

       }, [])
        //  const description = posts.find(details=>details.id === postId);
        //  console.log(comments);

        const useStyles = makeStyles({
            root: {
              minWidth: 500,
              marginTop:12,
              marginLeft:10,
              marginBottom:10,
              backgroundColor: "#cccccc"
            },
         
            title: {
              fontSize: 14,
            },
            pos: {
              fontSize: 14,
            },
          });
          const classes = useStyles();
    return (
       
         <div style={{marginTop: 100, width:1200, marginLeft:400}}>
             <div>
             { <Card className={classes.root}>
                <CardContent>
                <p>POST NUMBER - {id}</p>
                {/* <h4>UserId - {userId}</h4> */}
                <h4>POST TITLE - {title}</h4>
                <p><strong>Details </strong>- {body} </p>
                </CardContent>   
             
             </Card>}
           
            <div>
                {
                    comments.map(opinion => <Comment singledetails={opinion} ></Comment>)
                }
            </div>
            

            
            </div>
        </div>
    );
};

export default PostSummery;