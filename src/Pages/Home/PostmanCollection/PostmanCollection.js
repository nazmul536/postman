import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PostmanCollection = (props) => {
  const {name}=props.post;
    return (
      <Grid  item xs={4} sm={4} md={4}  >
      <Card sx={{ minWidth: 275,border: 0,boxShadow: 0 }}>
     
 <CardContent>
   <Typography  sx={{ fontWeight:600 }} variant="h5" component="div">
    {name}
   </Typography>

   
 </CardContent>



</Card>
   </Grid>
    );
};

export default PostmanCollection;