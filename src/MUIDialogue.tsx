import '../style/Dialogue.scss';

import * as T from './types';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DynamicModuleLoader} from "redux-dynamic-modules";
import {getDialogueModule} from './redux';

@(connect((props:T.Dialogue) => {

  const reduxKey = props.reduxKey || 'dialogue';
  if(!props[reduxKey]) return {_initializing:true};

  return  Object.assign({}, props[reduxKey]);

}) as any)
export class Dialogue extends Component<T.Dialogue, T.State>{

  render() {

    const {active, _initializing, reduxKey} = this.props;
    const {message, title} = this.props;

    return (
      <DynamicModuleLoader modules={[getDialogueModule(reduxKey)]}>
      {
        active && !_initializing? <Panel {...this.props} /> : null    
      }
      </DynamicModuleLoader>
    );
  }

}

@(connect() as any)
class Panel extends Component<T.Dialogue> {

  transitionTime:number = 250;

  state = {
    phase: 'hidden'
  }

  constructor( props ) {

    super(props);

    if(props.transitionTime)
      this.transitionTime = props.transitionTime;
  }

  componentDidMount() {

    setTimeout(_ => this.setState({phase:'visible'}), 0);
  }

  render() {

    const {message} = this.props;

    return(
      <div className={this.classes()} style={this.style()} >
        <div className="bkg" onClick={this.onClose} />
        <div className="panel">
          <div className="heading">
          </div>
          <div className="contents">
            <p>{message}</p>
          </div>
          {this.render_alert()}
          {this.render_confirm()}
        </div>
      </div>
    );
  }

  render_alert() {

    const {confirm, alertLabel} = this.props;

    if(confirm) return null;

    return (
      <div className="action alert">
        <button className="button action alert" />
      </div>
    )
  }

  render_confirm() {

    const {confirm, confirmLabel, cancelLabel} = this.props;

    if(!confirm) return null;

    return (
      <div className="action confirm">
        <button className="button action confirm" onClick={this.onConfirm}>{confirmLabel}</button>
        <button className="button action cancel" onClick={this.onCancel}>{cancelLabel}</button>
      </div>
    )

  }

  classes() {

    const {phase} = this.state;
    const cls = ['rdm-dialogue', phase];
    return cls.join(' ');
  }

  style() {

    return {transition: `opacity ${this.transitionTime}ms`};
  }

  onClose = evt => {

    this.setState({phase: 'hidden'});
    setTimeout(_ =>this.props.dispatch({type: 'rdm_close_dialogue'}), this.transitionTime)
  };

  onConfirm = evt => {

    const {dispatch, onConfirm:type} = this.props;
    
    this.setState({phase: 'hidden'});
    dispatch({type});
    setTimeout(_ => this.props.dispatch({type: 'rdm_close_dialogue'}), this.transitionTime)
  };

  onCancel = evt => {

    const {dispatch, onCancel:type} = this.props;

    this.setState({phase: 'hidden'});
    dispatch({type});
    setTimeout(_ =>this.props.dispatch({type: 'rdm_close_dialogue'}), this.transitionTime)
  };

}