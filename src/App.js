
import React from 'react';
import './App.css';
import AllPost from './Allpost and Details/AllPost';
import PostSummery from './Allpost and Details/PostSummery';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NoMatch from './Allpost and Details/NoMatch';
import { AppBar } from '@material-ui/core';



function App() {
    return ( 
    <div>
   
  
    <Router>

    <AppBar style={{backgroundColor:"#374785" }}>
      <div style ={{display:'flex', justifyContent:'end', alignItems:'center', fontSize:25, height:80}}>
           
            <div style={{marginRight:30, }}>
            <Link to="/AllPost" style={{color:'white'}}> All Post </Link>
            </div>

            {/* <div style={{marginRight:30,}}>
            <Link to="/PostDetails" style={{color:'white'}}>Post Details </Link>
            </div> */}
          
    </div>
    </AppBar>
    
    <Switch>
                    <Route exact path="/">
                        <AllPost />
                    </Route>
                    <Route path="/PostDetails">
                       <PostSummery></PostSummery> 
                    </Route>
                    <Route path="/AllPost">
                       <AllPost></AllPost>
                    </Route>
                    <Route path="/postDescription/:postId">
                       <PostSummery></PostSummery>
                    </Route>
                    <Route path="*">
                        <NoMatch></NoMatch>
                    </Route>
                </Switch>
    </Router>
   
   
    </div>
   
  
   

 
    
  
    
      
  
    
    );
}

export default App;