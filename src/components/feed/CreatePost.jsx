import * as React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, Grid, IconButton, makeStyles, TextField } from '@material-ui/core';
import { EmojiEmotions, LiveTv, PhotoAlbum } from '@material-ui/icons';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const useStyles = makeStyles((theme)=>({
    upper:{
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottom: '2px solid rgb(222,222,222)'
    },
    avatar:{
        
    },
    onMind:{
        marginLeft: '14px',
        width: '80%'
    },
    postTextField:{
        width:'100%'
    }
}))

export default function Post() {
    const classes = useStyles()
  return (
    <Card style={{width: '100%'}} sx={{ minWidth: 275 }}>
      <CardContent>
            <Grid container>
                <Grid container item className={classes.upper}>
                    <Grid item>
                        <Avatar className={classes.avatar}/>
                    </Grid>
                    <Grid item className={classes.onMind}>
                        <TextField id="outlined-basic" className={classes.postTextField} label="What's is on your Mind?" variant="outlined" />
                    </Grid>
                </Grid>
                <hr />
                <Grid container item>
                    <Grid item>
                        <Button>
                            <IconButton style={{ color: 'red' }}>
                                    <LiveTv />    
                            </IconButton>
                                Live Video
                        </Button>
                        </Grid>
                    <Grid item>
                        <Button>
                            <IconButton style={{ color: 'green' }}>
                                <PhotoAlbum />
                            </IconButton>
                            Photo/Video
                        </Button>
                        
                    </Grid>
                    <Grid item>
                        <Button>
                            <IconButton style={{ color:'yellow' }}>
                                <EmojiEmotions />
                            </IconButton>
                        Feeling/Activity    
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
      </CardContent>
    </Card>
  );
}
