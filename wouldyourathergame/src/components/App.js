import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import MainContainerController from './mainContainer'


class App extends Component {
  render() {
    return (

      <div className="App">
        <MainContainerController />
      </div>


    );
  }
}

export default App;
