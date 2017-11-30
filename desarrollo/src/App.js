import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blueGrey900 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';


import './App.css';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from './Home';
import Informacion from './Informacion';
import Caracteristicas from "./Caracteristicas";

import Error from "./Error";

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey900
  }
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpened: true
    };
  };
  _toggleDrawer() {
    this.setState({
      drawerOpened: !this.state.drawerOpened
    })
  };
  render() {

    const contentStyle = { transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1);  ' };

    if (this.state.drawerOpened) {
      contentStyle.marginLeft = 256;
    }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <HashRouter >
          <div>
            <div style={contentStyle}>
              <AppBar title='React - Routes' onLeftIconButtonTouchTap={() => this._toggleDrawer()} />
              <div className='contenido'>
                <Route exact path="/" component={Home} />
                <Route path="/informacion" component={Informacion} />
                <Route path="/caracteristicas" component={Caracteristicas} />
              </div>
            </div>
            <Drawer open={this.state.drawerOpened} onRequestChange={() => this._toggleDrawer()} >
              <List>
                <ListItem><NavLink className='btn' exact to="/" >Inicio</NavLink></ListItem>
                <ListItem><NavLink className='btn' to="/informacion">Informacion </NavLink></ListItem>
                <ListItem><NavLink className='btn' to='/caracteristicas'>Caracteristicas</NavLink></ListItem>
              </List>
            </Drawer>



          </div>

        </HashRouter >
      </MuiThemeProvider>
    );
  }
}

export default App;
