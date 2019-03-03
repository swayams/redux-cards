import React, { Component } from 'react';

import './App.css';
import Form from './components/Form';
import List from './components/List';
import Counter from './components/Count'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Counter></Counter>
      <Form></Form>  
      <List></List>

        
      </div>
    );
  }
}

export default App;
