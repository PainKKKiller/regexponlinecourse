import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import classnames from 'classnames';
// import { } from '../actions';

// import ErrorView from './views/ErrorView';
// import TableView from './views/TableView';


// import styles from './App.styl';


class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello regexp online!</h1>
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log('app#mapStateToProps');
  return { session: state.session };
}

function mapDispatchToProps(dispatch) {
  let actions = {};
  return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
