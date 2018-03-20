/*
* @providesModule %store
*/

import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';

import rootReducer from './reducer';

const isDebuggingInChrome = global._DEV_ && !!window.navigator.userAgent;
require('react-devtools-core').connectToDevTools();

export const store = createStore(
  rootreducer,
  undefined,
  composeWithDevTools(
    applyMiddleware(thunk),
    autoRehydrate()
  )
)

export function configureStore (onComplete = ()=> null) {

  persistStore(store, {storage: AsyncStorage}, onComplete)
  if (isDebuggingInChrome){
    window.store = store;
  }
  return store;
}