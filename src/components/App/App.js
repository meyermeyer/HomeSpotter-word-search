import React, { Component } from 'react';

import {withStyles} from '@material-ui/core'

import Input from '../Input/Input'
import Words from '../Words/Words'

const styles = theme => ({
    container: {
      marginLeft: '40px'
    }
});

class App extends Component {
  
  render() {
    return (
      <div className={this.props.classes.container}>
        <h1>word search</h1>
        <Input/>
        <Words/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
