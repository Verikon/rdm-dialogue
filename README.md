Dialogue module for "redux dyanmic modules" enabled projects.

Provided is:
 - A dialogue/pop up with alert (default) and confirm capabilities

Props:
 - reduxKey <string> - the root key for this component in the redux store, default 'dialogue'.


## Actions
### OPEN_DIALOGUE
#### Props
 - message: <string> - a message for the dialogue
 - title: <string> - a title for the dialgogue
 - confirm <boolean> - the dialogue is a confirm modal, default false.
 - onConfirm <string> - action to dispatch when user confirms the dialogue, default 'RDM_DIALOGUE_CONFIRM'
 - onCancel <string> - action to dispatch when the user cancels the dialogue, default 'RDM_DIALOGUE_CANCEL'
 - confirmLabel <string> - the label for the confirm button
 - cancelLabel <string> - the label for the cancel button
 - transitionTime <number> - the fadein/fadeout duration (in milliseconds), default 250
 
#### Usage
```
import React from 'react';
import {connect} from 'react-redux';
import {Dialogue} from 'rdm-dialogue';

@connect()
class Example extends React.Component {

  render() {
    return (
      <div>
        <Dialgoue />
        <div onClick={this.onNotify}><span>Click Me to Open</span></div>
      </div>
    )
  }
  
  onNotify = evt => this.props.dispatch({
    type: 'RDM_OPEN_DIALOGUE',
    message: 'This is a notification'
  })
}
```
