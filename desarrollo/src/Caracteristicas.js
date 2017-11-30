import React, { Component } from "react";

import Divider from 'material-ui/Divider';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';

import './Caracteristicas.css';

import Detalles from "./Detalles/Detalles";
import Detalles2 from "./Detalles/Detalles2";
import Detalles3 from "./Detalles/Detalles3";

class Caracteristicas extends Component {
  render() {
    return (
      <div>
        <center><h1>Caracteristicas</h1></center>
        <div>
          <div className='colCaracteristicas'>
            <Card className='cardContent'>
              <List>
                <ListItem leftIcon={<ActionGrade />}><NavLink className='btn' to="/caracteristicas">Caracteristica 1</NavLink></ListItem>
                <Divider />
                <ListItem leftIcon={<ActionGrade />}><NavLink className='btn' to="/caracteristicas/detalles2">Caracteristica 2</NavLink></ListItem>
                <Divider />
                <ListItem leftIcon={<ActionGrade />}><NavLink className='btn' to="/caracteristicas/detalles3">Caracteristica 3</NavLink></ListItem>
              </List>
            </Card>
          </div>
          <div className='colCaracteristicas'>
            <Card className='cardContent'>
              <Route exact path="/caracteristicas" component={Detalles} />
              <Route path="/caracteristicas/detalles2" component={Detalles2} />
              <Route path="/caracteristicas/detalles3" component={Detalles3} />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Caracteristicas 