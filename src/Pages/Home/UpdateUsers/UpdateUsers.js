import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Navigation from '../../Shared/Navigation/Navigation';
import {  Input } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UpdateUsers = () => {
    const [profile,setProfile]=useState({})
    const {id}=useParams();
    const handleLoginSubmit=e=>{
        const url= `http://localhost:5000/profiles/${id}`;
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(profile)
        })
        .then(res=>res.json())
        .then(data=>{if(data.modifiedCount>0){
            alert('Updated Successfully')
        } 
        })
        e.preventDefault();
      
        }
        const handleNameChange = e=> {
            const updateName=e.target.value;
            const UpdateUser={name:updateName, email:profile.email};
            setProfile(UpdateUser)
        }
        const handleEmailChange = e=> {
            const updateEmail=e.target.value;
            const updatedProfile={name: profile.name, email:updateEmail}
            setProfile(updatedProfile)
        }
        const handleImageChange = e=> {
            const updateImage=e.target.files;
            const updatedImage={name: profile.image, image:updateImage}
            setProfile(updatedImage)
        }

    useEffect(() => {
        const url= `http://localhost:5000/profiles/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProfile(data));
    },[setProfile])
    return (
        <div>
            <Navigation></Navigation>
            <h1> {profile.name} {profile.email}</h1>


            <form onSubmit={handleLoginSubmit}>
     
     <TextField 
     sx={{width:'75%', m:1}}
     id="standard-name" 
     type="name"
     name="name"
     onChange={handleNameChange}
     value={profile.name || ''}
     required
     variant="standard" />

   <TextField 
     sx={{width:'75%', m:1}}
     id="standard-email" 
     type="email"
     name="email"
     onChange={handleEmailChange}
     value={profile.email || '' }
     required
    
     variant="standard" />
     <br/>
 

     <Input
      accept="image/*" 
      type="file"
      onChange={handleImageChange}
      files={profile.files || ''}
       /><br/><br/>

<Button variant="contained" type='submit'>
 Update
</Button>


 </form>


        </div>
    );
};

export default UpdateUsers;