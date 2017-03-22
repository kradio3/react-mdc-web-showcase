import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'react-mdc-web/lib/Button';
import {Grid, Cell} from 'react-mdc-web/lib/Grid';
import {Card, CardHeader, CardTitle, CardMedia, CardText} from 'react-mdc-web/lib/Card';
import './App.css';
import 'material-components-web/dist/material-components-web.css';
import 'material-design-icons/iconfont/material-icons.css';

class App extends Component {
  render() {
    return (
        <Grid>
          <Cell col={3}/>
          <Cell col={6}>
            <Card>
              <CardHeader>
                <CardTitle>Welcome to React-mdc-web</CardTitle>
              </CardHeader>
              <CardMedia 
                style={{
                  height: '300px',
                  background: '#222',
                }}
              >
                <img src={logo} className="App-logo" alt="logo" />
              </CardMedia>
              <CardText>
                To get started, edit <code>src/App.js</code> and save to reload.
              </CardText>
            </Card>
          </Cell>
          <Cell col={3}/>
        </Grid>
    );
  }
}

export default App;
