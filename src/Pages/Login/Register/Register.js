import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { NavLink, useHistory } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import useAuth from './../../../hooks/useAuth';


const Register = () => {
    const [loginData,setLoginData]=useState({})
    const{user,registerUser,isLoading,authError}=useAuth()
    const history=useHistory();

    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={ ...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit=e=>{
      if(loginData.password !== loginData.password2){
        alert('Password did not match');
      }
      registerUser(loginData.email, loginData.password, loginData.name,history);
      e.preventDefault();
    }

    return (
      
        <Container>
           
        <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
    <Grid sx={{mt:8}} item xs={12} md={6}>
        <Typography variant="body1" gutterBottom>
        Register
      </Typography>

        <form onSubmit={handleLoginSubmit}>
        <TextField 
        sx={{width:'75%', m:1}}
        id="standard-name" 
        label="Your Name"
        type="name"
        name="name"
        onBlur={handleOnBlur} 
        variant="standard" />
      <TextField 
        sx={{width:'75%', m:1}}
        id="standard-email" 
        label="Your Email"
        name="email"
        type="email"
        onBlur={handleOnBlur} 
        variant="standard" />
        <br/>

        <TextField
        sx={{width:'75%', m:1}}
        id="standard-password"
        label="Your Password"
        type="password"
        name="password"
        onBlur={handleOnBlur} 
        variant="standard"
       />

      <TextField
      sx={{width:'75%', m:1}}
      id="standard-password2"
      label="Re-Enter Your Password"
      type="password"
      name="password2"
      onBlur={handleOnBlur} 
      variant="standard"
    />
    <NavLink style={{ textDecoration:'none'}}  to='/login'>
    <Button  sx={{width:'75%', m:1}} type='submit' variant="text">Already Registered? Please Login</Button>
    </NavLink>
    <Button  sx={{width:'75%', m:1}} type='submit' variant="contained">Register</Button>

    </form>
    {isLoading&&<CircularProgress />}
        {user?.email && <Alert severity="success">User Created Successfully</Alert>
  }
  {
    authError &&   <Alert severity="error">{authError}</Alert>
  }
  

      </Grid>
      <Grid item xs={12} md={6}>

      </Grid>
      
    </Grid>
  </Box>
        </Container>
    );
};

export default Register;