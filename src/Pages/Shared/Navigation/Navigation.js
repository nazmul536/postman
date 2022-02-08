import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Navigation = () => {
 const {user,logout}=useAuth()
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           User Profile
          </Typography>
         
          {
            user?.email ?
            <Box>
                <NavLink style={{textDecoration:'none', color:'white'}} to='/profileView'><Button color="inherit">Profile</Button></NavLink>
               
                <NavLink style={{textDecoration:'none', color:'white'}} to='/userList'><Button color="inherit">User-List</Button></NavLink>
      
             <Button style={{textDecoration:'none',color:'white', fontWeight:600}} onClick={logout} color="inherit">Logout</Button>
            </Box>

            :

            <Box>
              
              <NavLink style={{textDecoration:'none', color:'white'}} to='/AddProfile'><Button color="inherit">Add Profile</Button></NavLink>
            
              <NavLink style={{textDecoration:'none', color:'white'}} to='/login'><Button color="inherit">Login</Button></NavLink>
              </Box>
          }
          
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
};

export default Navigation;