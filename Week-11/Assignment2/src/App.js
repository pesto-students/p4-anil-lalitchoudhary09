import React, { Component } from "react";
import { increment, reset } from "./actions/actions";
import { connect } from "react-redux";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <>
        <table>
          <h2>You have walked {this.props.updateState} steps today!</h2>
          <button className="Add" onClick={() => this.props.incre()}>
            Add a Step
          </button>
          <button className="Reset" onClick={() => this.props.reset()}>
            Reset Steps
          </button>
        </table>
      </>
    );
  }
}

const mapStateToProps = (props) => {
  return {
    updateState: props.stateUpdateAndDelete
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incre: () => dispatch(increment()),
    reset: () => dispatch(reset())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
