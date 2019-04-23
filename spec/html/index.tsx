import "babel-polyfill";

import "./styles.scss";

import * as ReactDOM from "react-dom";

import React, {Component, Fragment} from 'react';
import {Provider, connect} from 'react-redux';

import {createStore} from 'redux-dynamic-modules';
import {getSagaExtension} from 'redux-dynamic-modules-saga';

import {Dialogue} from '../../src/Dialogue';

interface Props {
};

class Bootstrap extends Component<Props> {

  store:any;

  constructor( props ) {

    super(props);
    this.store = createStore({},[],[getSagaExtension()]);
  }

  render() {

    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    );
  }

}

interface AppProps {
  dispatch?:any;
}

@(connect() as any)
class App extends Component<AppProps> {

  render() {

    return (
      <Fragment>
        <Dialogue confirm />
        <button onClick={this.onClick}>Hai</button>
      </Fragment>
    );
  }

  onClick = evt => this.props.dispatch({type: 'rdm_open_dialogue', message: 'this is a test', confirm: true});
}

var mountNode = document.getElementById("app");
ReactDOM.render(<Bootstrap />, mountNode);