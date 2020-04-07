import { all, takeEvery } from 'redux-saga/effects'

export function* setSaga() {
    yield console.log('setSaga')
}

export function* getSaga() {
    yield takeEvery('add_todo_list_item', setSaga)
}

export function* rootSaga() {
    yield all([setSaga(), getSaga()])
}
