import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <SmurfForm />
        <SmurfList smurfs = {this.props.smurfs} />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return{
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  }
}

export default connect(mapStatetoProps,{ getSmurfs })(App);