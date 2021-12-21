import { Button, Container, makeStyles,Typography } from '@material-ui/core';
import {AvTimer, Bookmarks, EventNote, Flag, Group, Home, Movie, PeopleOutline, Person, Storefront, Work} from '@material-ui/icons'


const useStyle = makeStyles(theme=>({
    container:{
        paddingTop: theme.spacing(10),
        backgroundColor: '#3f51b5',
        height: '100vh',
        [theme.breakpoints.down('sm')]:{
          margin: '0',
          width: 'auto',

        }
    },
    item:{
      display:'flex',
      width: "100%",
      padding: "8px 10px",
      alignItem: 'center',
      borderRadius: "2%",
      [theme.breakpoints.down('sm')]:{
        padding: '6px 0px',
        width: '50%'
      }
    },
    
    left_button:{
       color: '#fff',
       width: '100%',
      '&:hover':{
          color: 'rgba(114,244,77,.9)',
      },
      [theme.breakpoints.down('sm')]:{
          width: '50%',
  
      }
    },
    smHidden:{
      [theme.breakpoints.down('sm')]:{
        display: 'none'
      }
    },
    text:{
      width: '1px solid #555',
    }
    
}))

const LeftBar = () => {
  const classes = useStyle()
  return (
      <Container className={classes.container}>
          <div className={classes.item}>
            <Typography className={classes.text}>
              <Button 
                className={classes.left_button}
                startIcon={<Group />}
              >
                <span className={classes.smHidden}> Find friends</span>
              </Button>
            </Typography>
          </div>
          <div className={classes.item}>
            
            <Typography className={classes.text}>
            <Button 
                className={classes.left_button}
                startIcon={<Storefront />}
              >
              <span className={classes.smHidden}>Market Place</span>
              </Button>
            </Typography>
          </div>
          <div className={classes.item}>
            
            <Typography className={classes.text}>
            <Button 
            className={classes.left_button}
            startIcon={<PeopleOutline />}
          >
          <span className={classes.smHidden}>Groups</span>
          </Button>
            </Typography>
          </div>
          <div className={classes.item}>
            
            <Typography className={classes.text}>
            <Button 
            className={classes.left_button}
            startIcon={<Movie />}
          >
          <span className={classes.smHidden}>Watch</span>
          </Button>
            </Typography>
          </div>
          <div className={classes.item}>
            
            <Typography className={classes.text}>
            <Button 
            className={classes.left_button}
            startIcon={<AvTimer />}
          >
          <span className={classes.smHidden}>Memories</span>
          </Button>
            </Typography>
          </div>
          <div className={classes.item}>
            
            <Typography className={classes.text}>
            <Button 
            className={classes.left_button}
            startIcon={<Bookmarks />}
          >
          <span className={classes.smHidden}>Saved</span>
          </Button></Typography>
          </div>
          <div className={classes.item}>
            
            <Typography className={classes.text}>
            <Button 
            className={classes.left_button}
            startIcon={<Flag />}
          >
          <span className={classes.smHidden}>Pages</span>
          </Button>
            </Typography>
          </div>
          <div className={classes.item}>
            
            <Typography className={classes.text}>
            <Button
            className={classes.left_button} 
            startIcon={<EventNote />}
          >
          <span className={classes.smHidden}>Events</span>
          </Button>
            </Typography>
          </div>
          <div className={classes.item}>
            
            <Typography className={classes.text}>
            <Button
            className={classes.left_button} 
            startIcon={<Work />}
          >
          <span className={classes.smHidden}>Jobs</span>
          </Button>
            </Typography>
          </div>
      </Container>
    );
}

export default LeftBar;
