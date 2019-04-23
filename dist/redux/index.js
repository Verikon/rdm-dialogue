"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reducers_1 = __importDefault(require("./reducers"));
const sagas_1 = require("./sagas");
function getDialogueModule(key) {
    key = key || 'dialogue';
    return {
        id: 'rdm-dialogue',
        reducerMap: {
            [key]: new reducers_1.default().respond
        },
        sagas: [sagas_1.DialogueSaga]
    };
}
exports.getDialogueModule = getDialogueModule;
