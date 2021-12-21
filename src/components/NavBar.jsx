import { AppBar, Avatar, Badge, Button, InputBase, makeStyles, Menu, Toolbar, Typography } from '@material-ui/core';
import { AddAlert, AddCircleOutlineRounded, ArrowDropDownCircleOutlined, Cancel, Facebook, Groups, GroupSharp, Home, MenuBook, MenuBookRounded, MenuOpen, MenuRounded, MenuSharp, Message, MessageRounded, NotificationImportant, NotificationsActive, NotificationsActiveRounded, OndemandVideo, People, PeopleAlt, PeopleOutline, PersonOutline, PinDropRounded, Search, Storefront} from '@material-ui/icons';
import { useEffect, useState } from 'react';
import User from '../assets/images/user_image_1.png'
const useStyle = makeStyles((theme)=>({

    toolBar:{
        display: "flex",
        alignItems:"space-between"
    },
   navbar_left:{
        flex:1,
        display: "flex",
        alignItems: 'center'
   },
   navbar_middle:{
        flex:1,
        display: "flex",
        [theme.breakpoints.down('sm')]:{
            display: 'none'
        }
   },
   navbar_right:{
        flex:1,
        display: "flex",
   },
   navbar_middle_icons:{
       display: "flex"
   },
   smLogo:{
        display: 'none',
        [theme.breakpoints.down('sm')]:{
            display: 'flex'
        }
   },
   lgLogo:{
        display: "flex",
        [theme.breakpoints.down('sm')]:{
            display: 'none'
        }
   },
   button:{
        color: '#fff'
   },
   facebook:{

   },
   search:{
        display: 'flex',
        border: "1px solid #fff",
        backgroundColor: "#fff",
        alignItems: 'center',
        [theme.breakpoints.down('sm')]:{
            display: (props) => props.open ? 'flex' : 'none'
        }

   },
   userInfo:{
       flex: 2,
       display: 'flex',
       alignItems: "center",
       [theme.breakpoints.down('sm')]:{
        display: 'none'
    }
   },
   menu:{
       flex:1,
       [theme.breakpoints.down('sm')]:{
        display: 'none'
    }
   },
   messenger:{
       flex:1
   },
   notification:{
       flex:1
   },
   account:{
       flex:1
   },
   right_icon:{
       color: '#fff'
   },

   searchIcon:{
       color: "#345"
   },
   searchIconSm:{
       display: 'none',
       [theme.breakpoints.down('sm')]:{
           display: 'flex'
       }
   },
   searchIconSm:{
       marginLeft: "20px",
       padding: "7px",       
   },
   right_spliter:{
       display: "none",
    [theme.breakpoints.down('sm')]:{
        display: 'flex',
        flex:1
    } 
   },
   responsive_menu:{
       display: "none",
       color: '#fff',
       [theme.breakpoints.down('sm')]:{
        display: (props) => (props.open) ? "none" : 'flex'
    } 
   },
   middleIcon:{
       color: '#fff'
   },
   userImage:{
       marginRight: "5px",
   }
        

}))

const NavBar = () => {
    const [open,setOpen] = useState(false)
    const classes = useStyle({open})
  
  useEffect(()=>{
        console.log(open)
  },[open])
  return (
    <AppBar position="fixed">
        <Toolbar className={classes.toolBar}>

            <div className={classes.navbar_left}>
                <Typography variant="h5" component="h2" className={classes.lgLogo}>
                    <Button 
                        variant="text"
                        startIcon={<Facebook />}
                        className={classes.button}
                        >   
                            Facebook
                    </Button>
                </Typography>
                <Typography variant="h5" component="h2" className={classes.smLogo}>
                    <Facebook className={classes.facebook}/>
                </Typography>
                <div className={classes.responsive_menu}>
                    <Search size="larger" onClick={()=>{setOpen(true)}} className={classes.searchIconSm}/>              
                    <Button>
                        <MenuRounded className={classes.responsive_menu}/>
                    </Button>
                </div>
                <div className={classes.search}>
                        
                <Search className={classes.searchIcon} onClick={(e)=>{setOpen(false) }}/>
                    <InputBase 
                        placeholder="Search"
                    />
                </div>
                
               
            </div>
            <div className={classes.navbar_middle}>
                <div className={classes.navbar_middle_icons}>
                    <div>
                        <Button 
                            className={classes.middleIcon}
                        >
                        <Home size="larger" />
                        </Button>
                    </div>
                <div>
                <Button 
                    className={classes.middleIcon}
                >
                <People />
                </Button>
                </div>
                <div>
                     <Button 
                    className={classes.middleIcon}
                >
                <Badge badgeContent={4} color="secondary">
                    <OndemandVideo />
                </Badge>
                
                </Button>
                </div>
                <div>
                 <Button 
                    className={classes.middleIcon}
                >
                <Storefront />
                    </Button>
                </div>
                <div>
                    <Button 
                        className={classes.middleIcon}
                    >
                    <PeopleOutline />
                    </Button>
                </div>
                </div>

            </div>

            <div className={classes.navbar_right}>

                    <div className={classes.userInfo}>
                        <Avatar alt="Abrham M" src={User} className={classes.userImage}/>
                        <Typography variant="" component="" className={classes.userName}>
                            UserName
                        </Typography>
                    </div>
                    <Button className={classes.right_icon}>
                        <AddCircleOutlineRounded />
                    </Button>
                    <div className={classes.menu}>
                        <Button className={classes.right_icon}>
                            <MenuSharp className={classes.right_menu}/>
                        </Button>
                        
                    </div>
                    <div className={classes.messenger}>
                        <Button className={classes.right_icon}>
                            <MessageRounded />
                        </Button>
                        
                    </div>
                    <div className={classes.notification}>
                        <Button className={classes.right_icon}>
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsActiveRounded />
                      </Badge>   
                       
                        </Button>
                        
                    </div>
                    <div className={classes.account}>
                        <Button className={classes.right_icon}>
                            <ArrowDropDownCircleOutlined />
                        </Button>
                        
                    </div>

            </div>

        </Toolbar>
    </AppBar>
  );
}

export default NavBar;
