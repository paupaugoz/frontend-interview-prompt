import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CalendarToday from '@material-ui/icons/CalendarToday';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Assignment from '@material-ui/icons/Assignment';
import MenuItem from '@material-ui/core/MenuItem';
import Home from '@material-ui/icons/Home';
import Extension from '@material-ui/icons/Extension';
import CheckBox from '@material-ui/icons/CheckBox';
import Assessment from '@material-ui/icons/Assessment';
import ViewAgenda from '@material-ui/icons/ViewAgenda';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Edit from '@material-ui/icons/Edit';
import FormatAlignJustify from '@material-ui/icons/FormatAlignJustify';
import Settings from '@material-ui/icons/Settings';
import FileCopy from '@material-ui/icons/FileCopy';
import PersonalVideo from '@material-ui/icons/PersonalVideo';

export const firstListItems = (
  <div>
  <div>
    <MenuItem button>
      <ListItemIcon>
        <CalendarToday className="icon-color" />
      </ListItemIcon>
      <ListItemText primary="Calendar" />
      <ListItemIcon>
        <KeyboardArrowRight className="icon-color arrow-margin" />
      </ListItemIcon>
    </MenuItem>
    </div>
     <div>
    <MenuItem button>
      <ListItemIcon>
        <Assignment className="icon-color" />
      </ListItemIcon>
      <ListItemText primary="Documentation" />
      <ListItemIcon>
        <KeyboardArrowRight className="icon-color arrow-margin" />
      </ListItemIcon>
    </MenuItem>
     </div>

    <ListItem button selected>
      <ListItemIcon>
        <Home className="icon-color-active" />
      </ListItemIcon>
      <ListItemText primary="Dashboard"  />
      <ListItemIcon>
        <KeyboardArrowRight className="icon-color arrow-margin" />
      </ListItemIcon>
      
    </ListItem>
    
    </div>
    );

export const secondaryListItems = (
  <div>
  <div>
    <MenuItem button>
      <ListItemIcon>
        <Extension className="icon-color" />
      </ListItemIcon>
      <ListItemText primary="Admin Plugins" />
      <ListItemIcon>
        <KeyboardArrowRight className="icon-color arrow-margin" />
      </ListItemIcon>
    </MenuItem>
    </div>
     <div>
    <MenuItem button>
      <ListItemIcon>
        <CheckBox className="icon-color" />
      </ListItemIcon>
      <ListItemText primary="Admin Forms" />
      <ListItemIcon>
        <KeyboardArrowRight className="icon-color arrow-margin" />
      </ListItemIcon>
    </MenuItem>
     </div>

    <ListItem button >
      <ListItemIcon>
        <ViewAgenda className="icon-color" />
      </ListItemIcon>
      <ListItemText primary="Admin Layouts"  />
      <ListItemIcon>
        <KeyboardArrowRight className="icon-color arrow-margin" />
      </ListItemIcon>
     
    </ListItem>
    
    </div>
    );

export const thirdListItems = (
  <div>
  <div>
    <MenuItem button>
      <ListItemIcon>
        <Assessment className="icon-color" />
      </ListItemIcon>
      <ListItemText primary="Information Panels" />
      <ListItemIcon>
        <KeyboardArrowRight className="icon-color arrow-margin" />
      </ListItemIcon>
    </MenuItem>
    </div>
     <div>
    <MenuItem button>
      <ListItemIcon>
        <ShoppingBasket className="icon-color" />
      </ListItemIcon>
      <ListItemText primary="Ecommerce" />
      <ListItemIcon>
        <KeyboardArrowRight className="icon-color arrow-margin" />
      </ListItemIcon>
    </MenuItem>
     </div>
    </div>
    );
  export const fourthListItems = (
  <div>
  <div>
    <MenuItem button>
      <ListItemIcon>
        <Edit className="icon-color" />
      </ListItemIcon>
      <ListItemText primary="UI Elements" />
      <ListItemIcon>
        <KeyboardArrowRight className="icon-color arrow-margin" />
      </ListItemIcon>
    </MenuItem>
    </div>
     <div>
    <MenuItem button>
      <ListItemIcon>
        <FormatAlignJustify className="icon-color" />
      </ListItemIcon>
      <ListItemText primary="Form Elements" />
      <ListItemIcon>
        <KeyboardArrowRight className="icon-color arrow-margin" />
      </ListItemIcon>
    </MenuItem>
     </div>

    <ListItem button >
      <ListItemIcon>
        <Settings className="icon-color" />
      </ListItemIcon>
      <ListItemText primary="Plugins"  />
      <ListItemIcon>
        <KeyboardArrowRight className="icon-color arrow-margin" />
      </ListItemIcon>
      
    </ListItem>

    <ListItem button >
      <ListItemIcon>
        <FileCopy className="icon-color" />
      </ListItemIcon>
      <ListItemText primary="Pages"  />
      <ListItemIcon>
        <KeyboardArrowRight className="icon-color arrow-margin" />
      </ListItemIcon>
      
    </ListItem>
    
    </div>
    );
    export const fifthListItems = (
  <div>
  <div>
    <MenuItem button>
      <ListItemIcon>
        <PersonalVideo className="icon-yellow" />
      </ListItemIcon>
      <ListItemText primary="Executive Meeting" />
      
    </MenuItem>
    </div>
     <div>
    <MenuItem button>
      <ListItemIcon>
        <PersonalVideo className="icon-orange" />
      </ListItemIcon>
      <ListItemText primary="HelpDesk Redesign" />
      
    </MenuItem>
     </div>

    <ListItem button >
      <ListItemIcon>
        <PersonalVideo className="icon-color icon-purple" />
      </ListItemIcon>
      <ListItemText primary="Sony Board Meeting"  />
     
      
    </ListItem>
    
    </div>
    );

