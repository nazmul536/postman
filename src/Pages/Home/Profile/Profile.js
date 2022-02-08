import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';



const Profile = ({profile}) => {
    const [profiles,setProfiles]=useState([])
    const {name,image,email}=profile;

    //Delete User
    const handleDeleteUser=id=>{
       const proceed=window.confirm('Are you sure, you want to delete?')
       if(proceed){
        const url=`http://localhost:5000/profiles/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('Deleted Successfully')
                const remainingProfile=profiles.filter(profiles=>profile._id!==id)
                setProfiles(remainingProfile)
            }
        })
       }
    }

    return (

        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <h1>Nazmul</h1>
          <img 
        style={{width:'300px', height:'300px', borderRadius:'50%', textAlign:'left'}} 
         src={`data:image/png;Base64,${image}`} 
        alt=""/>
          </Grid>

          <Grid sx={{ marginTop:10}} item xs={12} sm={12} md={6}>
          <h3><span style={{color:'green', marginRight:5, fontWeight:'bold'}}>Name:</span>{name}</h3>

      <h3><span style={{color:'green', marginRight:5, fontWeight:'bold'}}>Email:</span>{email}</h3>

     <Link sx={{TextDecoder:'none'}} to={`profiles/UpdateUsers/${profile._id}`}> <Button sx={{marginRight:2}} variant="contained" type='submit'>
    Update
  </Button></Link>
      <Button onClick={() => handleDeleteUser(profile._id)} sx={{marginRight:2}} variant="contained" type='submit'>
    Delete
  </Button>
          </Grid>

        </Grid>
      </Box>
    

    );
};

export default Profile;