"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reducers {
    constructor() {
        this.initialState = {
            active: false,
            message: null,
            alertLabel: 'Ok',
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            onConfirm: 'RDM_DIALOGUE_CONFIRM',
            confirmAction: {},
            onCancel: 'RDM_DIALOGUE_CANCEL',
        };
        this.respond = this.respond.bind(this);
    }
    respond(state, action) {
        if (state === undefined)
            return this.initialState;
        if (typeof this[action.type] === 'function')
            return this[action.type](state, action);
        return state;
    }
    rdm_open_dialogue(state, action) {
        state = Object.assign({}, state, action);
        state.active = true;
        state.confirmAction = action.confirmAction || {};
        return state;
    }
    rdm_close_dialogue(state, action) {
        state = Object.assign({}, state, this.initialState);
        state.active = false;
        state.confirmAction = {};
        return state;
    }
}
exports.default = Reducers;
