"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../style/Dialogue.scss");
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const redux_dynamic_modules_1 = require("redux-dynamic-modules");
const redux_1 = require("./redux");
let Dialogue = class Dialogue extends react_1.Component {
    render() {
        const { active, _initializing, reduxKey } = this.props;
        const { message, title } = this.props;
        return (react_1.default.createElement(redux_dynamic_modules_1.DynamicModuleLoader, { modules: [redux_1.getDialogueModule(reduxKey)] }, active && !_initializing ? react_1.default.createElement(Panel, Object.assign({}, this.props)) : null));
    }
};
Dialogue = __decorate([
    react_redux_1.connect((props) => {
        const reduxKey = props.reduxKey || 'dialogue';
        if (!props[reduxKey])
            return { _initializing: true };
        return Object.assign({}, props[reduxKey]);
    })
], Dialogue);
exports.Dialogue = Dialogue;
let Panel = class Panel extends react_1.Component {
    constructor(props) {
        super(props);
        this.transitionTime = 250;
        this.state = {
            phase: 'hidden'
        };
        this.onClose = evt => {
            this.setState({ phase: 'hidden' });
            setTimeout(_ => this.props.dispatch({ type: 'rdm_close_dialogue' }), this.transitionTime);
        };
        this.onConfirm = evt => {
            const { dispatch, onConfirm: type } = this.props;
            this.setState({ phase: 'hidden' });
            dispatch({ type });
            setTimeout(_ => this.props.dispatch({ type: 'rdm_close_dialogue' }), this.transitionTime);
        };
        this.onCancel = evt => {
            const { dispatch, onCancel: type } = this.props;
            this.setState({ phase: 'hidden' });
            dispatch({ type });
            setTimeout(_ => this.props.dispatch({ type: 'rdm_close_dialogue' }), this.transitionTime);
        };
        if (props.transitionTime)
            this.transitionTime = props.transitionTime;
    }
    componentDidMount() {
        setTimeout(_ => this.setState({ phase: 'visible' }), 0);
    }
    render() {
        const { message } = this.props;
        return (react_1.default.createElement("div", { className: this.classes(), style: this.style() },
            react_1.default.createElement("div", { className: "bkg", onClick: this.onClose }),
            react_1.default.createElement("div", { className: "panel" },
                react_1.default.createElement("div", { className: "heading" }),
                react_1.default.createElement("div", { className: "contents" },
                    react_1.default.createElement("p", null, message)),
                this.render_alert(),
                this.render_confirm())));
    }
    render_alert() {
        const { confirm, alertLabel } = this.props;
        if (confirm)
            return null;
        return (react_1.default.createElement("div", { className: "action alert" },
            react_1.default.createElement("button", { className: "button action alert" })));
    }
    render_confirm() {
        const { confirm, confirmLabel, cancelLabel } = this.props;
        if (!confirm)
            return null;
        return (react_1.default.createElement("div", { className: "action confirm" },
            react_1.default.createElement("button", { className: "button action confirm", onClick: this.onConfirm }, confirmLabel),
            react_1.default.createElement("button", { className: "button action cancel", onClick: this.onCancel }, cancelLabel)));
    }
    classes() {
        const { phase } = this.state;
        const cls = ['rdm-dialogue', phase];
        return cls.join(' ');
    }
    style() {
        return { transition: `opacity ${this.transitionTime}ms` };
    }
};
Panel = __decorate([
    react_redux_1.connect()
], Panel);
