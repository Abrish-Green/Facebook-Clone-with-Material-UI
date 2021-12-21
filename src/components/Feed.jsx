import { Button, IconButton, makeStyles } from '@material-ui/core';
import {ArrowForward, Forward, Forward10Outlined, ForwardSharp, Person} from '@material-ui/icons'
import Story from './feed/Story'
import Image from '../assets/images/user_image_1.png'
import CreatePost from './feed/CreatePost';
import Post from './feed/Post';

const images = [
    {
      title: "Abrham M",
      url: Image,
    }
]
const useStyle = makeStyles(theme=>({
  container:{
    paddingTop: theme.spacing(10),
    height: '85vh',
    overflow: 'scroll',
    overflowX: 'hidden'
},
  stories:{
      display: 'flex', 
  },
  nextIcon:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

  },
  icon:{
      padding: '2px 4px',
      backgroundColor: '#fff',
      border: '2px solid #ddd',
      borderRadius: '100%'
  },
  post:{
      marginTop: '20px',
      marginLeft: '10%',
      width: '70%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  newPost:{
    marginTop: '20px',
    marginLeft: '10%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
    
},
  
}))

const Feed = () => {
  const classes = useStyle()
  return (
    <div className={classes.container}>
        <div className={classes.stories}>
            <Story className={classes.story} image={Image}/>
            <Story className={classes.story} image={Image}/>
            <Story className={classes.story} image={Image}/>
            <Story className={classes.story} image={Image}/>
            <Story className={classes.story} image={Image}/>
            <div className={classes.nextIcon}>
              <IconButton color="primary" aria-label="upload picture" component="span">
                <ArrowForward className={classes.icon} />
              </IconButton> 
            </div>
            
        </div>
        <div className={classes.post} >
            <CreatePost className={classes.mainPost}/>
        </div>

        <div className={classes.newPost}>
              <Post images={images} />
              <Post images={images} />
              <Post images={images} />
        </div>
    </div>
  );
}

export default Feed;
