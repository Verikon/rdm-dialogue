Dialogue module for "redux dyanmic modules" enabled projects.

Provided is:
 - A dialogue/pop up 

Props:
 - reduxKey <string> - the root key for this component in the redux store, default 'dialogue'.

## Actions
### OPEN_DIALOGUE
#### Props
- __message__ <string> : the notification message.

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
