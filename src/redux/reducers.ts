import * as T from '../types';

export default class Reducers {

  initialState:T.Dialogue = {
      active: false,
      message: null,
      alertLabel: 'Ok',
      confirmLabel: 'Confirm',
      cancelLabel: 'Cancel',
      onConfirm: 'RDM_DIALOGUE_CONFIRM',
      confirmAction: {},
      onCancel: 'RDM_DIALOGUE_CANCEL',

  };
  
  constructor() {

    this.respond = this.respond.bind(this);
  }

  respond( state:any, action:any ) {

    if (state === undefined) return this.initialState;
    if (typeof this[action.type] === 'function') return this[action.type](state, action);

    return state;
  }

  rdm_open_dialogue( state:T.Dialogue, action:any ):T.Dialogue{

    state = Object.assign({}, state, action);
    state.active = true;
    state.confirmAction = action.confirmAction || {};
    return state
  }

  rdm_close_dialogue( state:T.Dialogue, action:any ):T.Dialogue {

    state = Object.assign({}, state, this.initialState);  
    state.active = false;
    state.confirmAction = {};
    return state;
  }
}