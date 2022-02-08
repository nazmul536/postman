import React, {useState,useEffect} from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import PostmanCollection from '../PostmanCollection/PostmanCollection';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';



const PostManCollections = () => {
    const [info,setInfo]=useState([]);
    useEffect(()=>{
        fetch('post.json')
        .then(res=>res.json())
        .then(data=>setInfo(data))
    },[info])
    return (
      
        <Box sx={{ flexGrow: 1 }}>
            <Navigation></Navigation>
         <Container>
         <Typography sx={{fontWeight:600, mt:3}} variant="h4" gutterBottom component="div">
      User List
      </Typography>

      <TextField id="outlined-search" sx={{width:'50%'}} label="Search List" type="search" />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 12, md: 12 }}>
      {
                info?.item?.map(post=><PostmanCollection
                key={post._id}
                post={post}
                ></PostmanCollection>)
            }
      </Grid>
         </Container>
    </Box>

    );
};

export default PostManCollections;