import * as React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton, ImageList, ImageListItem, ImageListItemBar, makeStyles } from '@material-ui/core';

import Image from '../../assets/images/user_image_1.png'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    •
  </Box>
);

const useStyles = makeStyles((theme,image)=>({
        storyWrapper:{
            margin: '6px 10px',
            display: 'flex',
            height: '25vh',
            borderRadius: '5%',
            flex:1,
            background: `url(${image})`
        },
        image:{
            margin:0,
            padding:0,
            height: '100%',
            width: "100%",
            borderRadius: '8%',
        },
        userName:{
            color:'#000',
            backgroundColor: "rgb(241,241,241)",
            padding: '4px 6px',
            borderRadius: '1%',
            position: 'relative',
            top: '-29px',
            left: '46px',
            borderBottomRightRadius: '10%',
        }

        
}))
export default function Story(props) {

  const image = props.imageUrl
  const classes = useStyles(image)
  return (
        <div className={classes.storyWrapper}>
                <div className={classes.story}>
                    <img src={Image}  className={classes.image}alt={"Story"} /> 
                    <span className={classes.userName}>Abrham M</span>
                </div>
        </div>
    );
}
