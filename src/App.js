import React, { Component } from "react";
import { connect } from "react-redux"
import { getSmurf , addSmurf } from './actions/index'

import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  // componentDidMount() {
  //   axios.get('http://localhost:3333/smurfs').then(res=>{
  //     console.log(res);
  //   })
  // }

  state = {
    name: "",
    nickname: "",
    position: "",
  };
  
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand">Smurf Village Database</a>
        </nav>
        <main>
          <AddForm addSmurf={addSmurf}/>
          <SmurfDisplay getSmurf={getSmurf}/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, { getSmurf, addSmurf })(App);

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.