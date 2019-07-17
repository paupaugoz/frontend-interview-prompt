/* eslint-disable no-script-url */

import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { StylesProvider } from "@material-ui/styles";
import './body.css';

export default function DashHeading() {
 
  return (
     <StylesProvider injectFirst>
    <div className="dash-container">
      <div className="dashboard-wrapper">
        <h1 className="dashboard-heading">
          Dashboard
        </h1>
        <h2 className="dash-stat">
          Dashboard & Statistics
        </h2>
      </div>
      <Button variant="contained" >
        17 January 2016 - 15 February 2016
        <KeyboardArrowDown />
      </Button>
     


      
    </div>
     </StylesProvider >
  );
}
