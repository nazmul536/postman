import React, {useState,useEffect} from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import PostmanCollection from '../PostmanCollection/PostmanCollection';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const PostManCollections = () => {
    const [info,setInfo]=useState([]);
    useEffect(()=>{
        fetch('post.json')
        .then(res=>res.json())
        .then(data=>setInfo(data))
    },[info])
    return (
        // <div>
        //     <Navigation></Navigation>
        //     <h1>Name</h1>
            // {
            //     info?.item?.map(post=><PostmanCollection
            //     key={post._id}
            //     post={post}
            //     ></PostmanCollection>)
            // }
        // </div>
        <Box sx={{ flexGrow: 1 }}>
            <Navigation></Navigation>
          <Typography sx={{fontWeight:600, mb:5}} variant="h4" gutterBottom component="div">
      User List
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {
                info?.item?.map(post=><PostmanCollection
                key={post._id}
                post={post}
                ></PostmanCollection>)
            }
      </Grid>
    </Box>

    );
};

export default PostManCollections;