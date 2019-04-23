import {State} from './types';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DynamicModuleLoader} from "redux-dynamic-modules";
import {getDialogueModule} from './redux';

interface Props {
    dispatch?:any;
    reduxKey?: string;
    message?: string;
}

@(connect((props:Props) => ({
  reduxKey: props.reduxKey || 'dialogue',
  message: props.message
})) as any)
export class Dialogue extends Component<Props, State>{

  render() {

    const {reduxKey, message} = this.props;

    return (
      <DynamicModuleLoader modules={[getDialogueModule(reduxKey)]}>
        <div className="rdm-dialoge">
          <div className="panel">
            <p>{message}</p>
          </div>
        </div>
      </DynamicModuleLoader>
    );
  }
}