
import Reducer from './reducers';
import {DialogueSaga} from './sagas';

export function getDialogueModule( key?:string ) {

    key = key || 'dialogue';

    return {
        id: 'rdm-dialogue',
        reducerMap: {
            [key]: Reducer
        },
        sagas:[DialogueSaga]
    }
}