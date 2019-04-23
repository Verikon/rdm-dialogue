import {State} from './types';

export default class Reducers {

  initialState:State = {
      active: false,
      message: null
  };
  
  constructor() {

    this.respond = this.respond.bind(this);
  }

  respond( state:any, action:any ) {

    if (state === undefined) return this.initialState;
    if (typeof this[action.type] === 'function') return this[action.type](state, action);

    return state;
  }

  rdm_open_dialogue( state:State, action:any ):State{

    state = Object.assign({}, state);
    state.active = true;
    state.message = action.message;
    return state
  }

  rdm_close_dialogue( state:State, action:any ):State {

    state = Object.assign({}, state);  
    state.active = false;
    state.message = null;
    return state;
  }
}