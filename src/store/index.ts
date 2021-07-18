import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { getSaga } from './saga'
import rootReducer from './reducer'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [thunk, sagaMiddleware]

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))

// console.log('store', store, store.getState())
sagaMiddleware.run(getSaga)
// const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
