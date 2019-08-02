import React, { Component } from 'react';

import Input from '../Input/Input'
import Words from '../Words/Words'

class App extends Component {
  
  render() {
    return (
      <>
        <h1>word search</h1>
        <Input/>
        <Words/>
      </>
    );
  }
}

export default App;
