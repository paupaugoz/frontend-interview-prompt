import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Graph from './Graph';
import DashHeading from './BodyHeading';
import DashStats from './Stats';


import './body.css';



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
   
    <div id="main">
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
                <DashHeading />
                <DashStats />
        
        <div className="chart-container">
          <div className="chart-wrapper">
            <div className="chart-text">
              <h1 className="chart-heading">Site Visits</h1>
              <h2 className="dash-stat">Weekly Stats</h2>
              <Button className="graph-button-left" variant="contained" >
                NEW
              </Button>
              <Button className="graph-button-right" variant="contained" >
                RETURNING
             </Button>
            </div>
             <Graph />
          </div>

          <div className="chart-wrapper">
            <div className="chart-text">
              <h1 className="chart-heading">Site Visits</h1>
              <h2 className="dash-stat">Weekly Stats</h2>
              <Button className="graph-button-left" variant="contained" >
                NEW
              </Button>
              <Button className="graph-button-right" variant="contained" >
                RETURNING
             </Button>
            </div>
             <Graph />
          </div>
       
        </div>


      </main>
    </div>
    
  );
}
