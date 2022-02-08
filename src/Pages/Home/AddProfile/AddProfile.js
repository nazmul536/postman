import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Input } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navigation from '../../Shared/Navigation/Navigation';

const AddProfile = () => {
   const [name,setName]=useState('')
   const [email,setEmail]=useState('')
    const [image,setImage]=useState(null)
    const [success,setSuccess]=useState(false)
   
    const handleLoginSubmit=e=>{
      e.preventDefault();
      if(!image){
        return;
      }
      
      const formData=new FormData();
      formData.append('name',name);
      formData.append('email',email);
      formData.append('image',image);

      fetch('http://localhost:5000/profiles', {
        method: 'POST',
        body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setSuccess('Doctors added successfully');
                console.log('Doctors added successfully')
            }
        })
        .catch(error => {
        console.error('Error:', error);
        });

    }

    return (
       
       
           
        <Box sx={{ flexGrow: 1 }}>
        <Navigation></Navigation>
        <Container>
  <Grid container spacing={2}>
    <Grid sx={{mt:8}} item xs={12} md={6}>
        <Typography variant="body1" gutterBottom>
       Add a person
      </Typography>

        <form onSubmit={handleLoginSubmit}>
     
        <TextField 
        sx={{width:'75%', m:1}}
        id="standard-name" 
        label="Your Name"
        type="name"
        name="name"
        required
        onChange={e => setName(e.target.value)} 
        variant="standard" />
   
      <TextField 
        sx={{width:'75%', m:1}}
        id="standard-email" 
        label="Your Email"
        name="email"
        type="email"
        required
        onChange={e => setEmail(e.target.value)} 
        variant="standard" />
        <br/>
    

        <Input
         accept="image/*" 
         type="file"
         onChange={e =>setImage(e.target.files[0])} 
          /><br/><br/>
  <Button variant="contained" type='submit'>
    Upload
  </Button>
   

    </form>
    {
                success && <p style={{color:'green'}}>{success}</p>
            }
      </Grid>
      <Grid item xs={12} md={6}>

      </Grid>
      
    </Grid>
    </Container>
  </Box>
       
    );
};

export default AddProfile;