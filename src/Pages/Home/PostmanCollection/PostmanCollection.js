import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const PostmanCollection = (props) => {
  const {name}=props.post;
    return (
      <Grid  item xs={4} sm={6} md={6}  >
      <Card sx={{ minWidth: 275,border: 0,boxShadow: 0 }}>
     
 {/* <CardContent>
   <Typography  sx={{ fontWeight:600 }} variant="h5" component="div">
    {name}
   </Typography>
 </CardContent> */}

 <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      
      <nav  sx={{TextAlign:'center'}} aria-label="secondary mailbox folders">
      <ListItem>
            <ListItemButton >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText sx={{fontSize:'20px',fontWeight:600}} primary={name} />
            </ListItemButton>
          </ListItem>
       
      </nav>
    </Box>

</Card>
   </Grid>
    );
};

export default PostmanCollection;