import React, { Component } from 'react';
import AppBar from './appBar.js'
import './App.css';
import Table from './table.js'



class App extends Component {
  render() {
    return (
      <div className="App">
  <AppBar/>
       <Table/>
          
      </div>
    );
  }
}

export default App;
