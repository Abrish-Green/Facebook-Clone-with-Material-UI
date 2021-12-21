import { Button, makeStyles } from '@material-ui/core';
import {Person} from '@material-ui/icons'
import Contact from './contacts/contact'

const useStyle = makeStyles(theme=>({
  container:{
    paddingTop: theme.spacing(10)
}
}))

const RightBar = () => {
  const classes = useStyle()
  return (
    <div className={classes.container}>
        <Contact />
    </div>
  );
}

export default RightBar;
