export interface State {
    active: boolean;
    message: string;
}

export interface PanelProps extends ConnectedComp{
    message: string;
    title: string;
}

interface ConnectedComp {
    dispatch?:any;
}


export interface Dialogue {
    _initializing?: boolean;
    dispatch?:any;
    reduxKey?: string;
    title?: string;
    message?: string;
    active?: boolean;

    alertLabel: string;

    confirm?: boolean;
    onConfirm: string;
    confirmLabel: string;
    confirmAction: object;
    onCancel: string;
    cancelLabel: string;
}