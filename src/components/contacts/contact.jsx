import * as React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, Badge, makeStyles ,StyledBadge} from '@material-ui/core';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const useStyles = makeStyles((theme)=>({
    card:{
        padding: '8px'
    },
    onlineUsers:{

    }
}))

const User = ()=>{
    return (
        <div className="user" style={{ padding:'4px 6px',display: 'flex', }}> 
                
                <Badge color="primary" overlap="circular" badgeContent=" " variant="dot">
                    <Avatar style={{height: '25px',width: '25px'}}/>
                </Badge>
                <span style={{ marginLeft: '4px',fontSize: '17px' }}>UserName</span>
        </div>
    )
}
export default function Contact() {
    const classes = useStyles()
  return (
    <div className={classes.card}>
      
            <Typography variant="p" style={{ color: "#999",fontSize: '20px' }}>
                Contacts
                <div className={classes.onlineUsers}>
                    <User/>
                    <User/>
                    <User/>
                </div>
            </Typography>  
     
    </div>
  );
}
