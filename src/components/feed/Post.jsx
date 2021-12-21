import * as React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, Grid, IconButton, makeStyles, TextField, ImageList,ImageListItem } from '@material-ui/core';
import { Public, MoreVert,CheckCircleTwoTone, EmojiPeople, InsertEmoticon, ThumbUpAlt, ChatBubble, ChatBubbleOutlined, ChatBubbleOutline, ReplyOutlined } from '@material-ui/icons';

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
        marginBottom: '10px',
        height: 'auto',
        width: '70%',
        
    },
    container:{
        display: 'flex',
        flexDirection: 'column'
    },
    top:{
        display: 'flex',
        alignItems: 'center',
    },
    logo:{
        flex:1
    },
    pageName:{
        marginLeft: '6px',
        flex:10

    },
    dots:{
        flex:1
    },
    postDate:{
        display: 'flex',
        alignItems: 'center',
    },
    public:{
        marginLeft: '3px',
        fontSize: '15px'
    },
    postTextSection:{
        marginTop: '5px',
        padding: '3px 5px',
        height: 'auto'
    },
    postImage1:{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    postImageMul:{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        height: '100%',
        width: '100%',
    },
    likeAndShare:{
        marginTop: '15px',
        padding: '6px',
        display: 'flex',
        width: '100%',
        borderBottom: '1px solid #666'

    },
    likes:{
        flex: 1,
        flexGrow: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    comments:{
        flex:1
    },
    likeDetail:{
        backgroundColor: 'blue',
        color: 'white',
        padding: '1px 1px',
        borderRadius: '100%' 
    },
    LikeAndCommentIcons:{
        display: 'flex',
        width: '100%'
        
    },
    likeIcon:{
        flex: 1,
    },
    commentIcon:{
        flex:1,
    },
    shareIcon:{
        flex: 1,
    },
    innerIcon:{
        display: 'flex',
        fontSize: '16px'
    },
    iconSpan:{
        marginLeft: '4px'
    }
}))

export default function Post({images}) {
    const classes = useStyles()
  return (
    <Card className={classes.card} sx={{ minWidth: 275 }}>
      <CardContent>
           <Grid container className={classes.container}>
                <Grid container item className={classes.top}>
                    
                <div>
                    <div className={classes.logo}>
                        <Avatar />
                    </div>
                </div>
                    <Typography
                        variant=""
                        className={classes.pageName}
                        component="span"
                    >
                    
                        PageName
                        
                        <CheckCircleTwoTone style={{ marginLeft: '4px',color: 'blue' }} />
                        <div className={classes.postDate}>
                            6h <Public  className={classes.public} size="small"/>
                        </div>
                    </Typography>
                    <IconButton>
                        <MoreVert className={classes.dots}/>
                    </IconButton>
                    
                </Grid>
                <Grid container className={classes.postTextSection} item>
                        <div className={classes.postText}>
                        loremloremloremloremloremloremloremloremloremloremloreml
                        oremloremloremloremloremloremloremloremloremloremlo
                        remloremloremloremloremloremloremloremloremloremloremlorem
                        loremloremloremlorem
                        loremloremloremloremloremloremloremloremloremloremloreml
                        oremloremloremloremloremloremloremloremloremloremlo
                        remloremloremloremloremloremloremloremloremloremloremlorem
                        loremloremloremlorem
                        
                        </div>
                </Grid>
                <Grid container item>
                        <div className={classes.image}>
                        
                        {
                            images && (images.length  == 1 ) ? 
                            images.map((image)=>{
                                <img
                                    src={`${image.url}`}
                                    srcSet={`${image.url}`}
                                    alt={image.title}
                                    loading="lazy"
                                    className={classes.postImage1}
                                />
                            }) : null
                        } 
                        <ImageList sx={{ width: 500, height: 450 }} >
                        
                        
                        {images && images.map((image) => (
                            <ImageListItem key={image.title}>
                                <img
                                    src={`${image.url}`}
                                    srcSet={`${image.url}`}
                                    alt={image.title}
                                    loading="lazy"
                                    className={classes.postImageMul}
                                />
                          </ImageListItem>
                        ))}
                      </ImageList>
                        </div>
                </Grid>
                <Grid container item>
                    <div className={classes.likeAndShare}>
                        <div className={classes.likes}>
                            <ThumbUpAlt className={classes.likeDetail} />    
                             <span style={{ marginLeft: '.5rem',padding: '4px 2px' }}>233</span>
                        </div>
                        <div className={classes.comments}>
                            23 Comment 23 Share
                        </div>
                    </div>
                </Grid>
                <Grid container item>
                        <div className={classes.LikeAndCommentIcons}>
                            <div className={classes.likeIcon}>
                                <IconButton className={classes.innerIcon}>
                                    <ThumbUpAlt className={classes.likeDetail} /> 
                                    <span className={classes.iconSpan}>Like</span>   
                                </IconButton>
                                
                            </div>
                            <div className={classes.commentIcon}>
                                <IconButton className={classes.innerIcon}>
                                    <ChatBubbleOutline />
                                      <span className={classes.iconSpan}>Comment</span>      
                                </IconButton>    
                            
                            </div>
                            <div className={classes.shareIcon}>
                                <IconButton className={classes.innerIcon}>
                                    <ReplyOutlined />
                                    <span className={classes.iconSpan}>Share</span>
                                </IconButton>
                                
                            </div>
                        </div>
                </Grid>
           </Grid>
      </CardContent>
    </Card>
  );
}
