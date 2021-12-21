import './App.css';
import NavBar from './components/NavBar';
import LeftBar from './components/LeftBar';
import { Grid } from '@material-ui/core'; 
import Feed from './components/Feed'
import Rightbar from './components/RightBar'
function App() {
  return (
      <div>
        <NavBar/>
        <Grid container>
            <Grid item sm={2} xs={2}>
                <LeftBar />
            </Grid>
            <Grid item sm={7} xs={10}>
                <Feed />
            </Grid>
            <Grid item sm={3}>
                <Rightbar />
            </Grid>
        </Grid>
      </div>
    )
}

export default App;
