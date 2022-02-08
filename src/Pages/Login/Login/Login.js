import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { NavLink, useLocation, useHistory  } from 'react-router-dom';
import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useAuth from './../../../hooks/useAuth';



const Login = () => {

    const [loginData,setLoginData]=useState({})
    const {user,loginUser,isLoading,signInGoogle,authError}=useAuth();
    const location=useLocation();
    const history =useHistory();

    const handleOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLogin={...loginData};
        newLogin[field]=value;
        setLoginData(newLogin);
        e.preventDefault()
    }

    const handleLoginSubmit=e=>{
      loginUser(loginData.email, loginData.password, location, history)
      e.preventDefault();
  }

   //Google Sign In
   const handleGoogleSignIn=()=>{
    signInGoogle(location,history);
  }
 
    return (
        <div>
            <Navigation></Navigation>
           <Container>
           <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid  sx={{mt:8}} item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLoginSubmit}>
     
     {/* User Login  */}
      <TextField
      sx={{width:'75%', m:1}}
          id="standard-bassic"
          label="Your Email"
          type="email"
          name="email"
          onChange={handleOnChange}  
          variant="standard"
        />
    

         <TextField
          sx={{width:'75%', m:1}}
          id="standard-basic"
          label="Your Password"
          type="password"
          name="password"
          onChange={handleOnChange} 
          variant="standard"
        />



        <NavLink style={{ textDecoration:'none'}}  to='/register'>
        <Button  sx={{width:'75%', m:1}} type='submit' variant="text">New User? Please Register</Button>
        </NavLink> 
        <Button  sx={{width:'75%', m:1}} type='submit' variant="contained">Login</Button>
       
    

      </form>

        {/* Google Sign In */}
      <p>------------------------</p>
        <Button onClick={handleGoogleSignIn}  sx={{ m:1}} type='submit' variant="contained">Google Sign In</Button>


        </Grid>
        <Grid item xs={4}>
         

        </Grid>
      
    
      </Grid>
    </Box>
           </Container>
        </div>
    );
};

export default Login;