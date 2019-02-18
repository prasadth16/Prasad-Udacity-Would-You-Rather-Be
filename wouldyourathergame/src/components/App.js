import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import MainContainerController from './mainContainer'
import { getinitialData } from '../actions/shared'
import { connect } from 'react-redux'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(getinitialData())
  }
  render() {
    {
      if (this.props.loading)
        return (
          <div><h1>Loading the Application!!!</h1></div>
        )
    }
    return (

      <div className="App">
        <MainContainerController />
      </div>


    );
  }
}

function mapStateToProps({ loading }) {
  return {
    loading: loading,
  }
}
const AppControll = connect(mapStateToProps)(App)
export default AppControll;
