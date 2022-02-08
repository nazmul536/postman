import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Profile from '../Profile/Profile';



const ProfileView = () => {
    const [profiles,setProfiles]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/profiles')
        .then(res=>res.json())
        .then(data=>setProfiles(data))
    },[])
    return (
        <div>
           <Navigation></Navigation>
          <br/> <br/>  <br/>
           <Container>
             <Grid container spacing={2}>
        {
            profiles.map(profile=><Profile
                key={profile._id}
                profile={profile}
            ></Profile>)
        } 
        
            </Grid>
          </Container>
        
        </div>
    );
};

export default ProfileView;