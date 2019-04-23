"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
function* DialogueSaga(action) {
    yield effects_1.takeEvery('RDM_OPEN_DIALOGUE', RDM_OPEN_DIALOGUE);
}
exports.DialogueSaga = DialogueSaga;
function* RDM_OPEN_DIALOGUE(action) {
}
