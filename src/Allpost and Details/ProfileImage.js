import React from 'react';

const ProfileImage = (props) => {
    const profileImage = {
        borderRadius:'100%',
        marginTop: 60,
        marginLeft:15,
        height: 100 
    }
    const {urls} = props.picture;
    console.log(urls);
  
    return (
        <div>
          
            {<img src = {urls[4][512]} alt="img" style={profileImage} />}
            
        </div>
    );
};

export default ProfileImage;