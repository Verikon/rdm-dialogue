import {takeEvery, put, delay} from 'redux-saga/effects';

export function* DialogueSaga( action ) {

    yield takeEvery('RDM_OPEN_DIALOGUE', RDM_OPEN_DIALOGUE);
}

function* RDM_OPEN_DIALOGUE( action ) {

}