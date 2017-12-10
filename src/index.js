import React from 'react';
import ReactDOM from 'react-dom';
import StoreApp from './components/StoreApp';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import storeApp from './reducers'
import {loadState, saveState} from './localStorage'
import {throttle} from 'lodash'
let localState = loadState()
let store = createStore(storeApp, localState)

ReactDOM.render(
<Provider store={store}>  
  <StoreApp />
</Provider>
, document.getElementById('root'));
registerServiceWorker();

store.subscribe(throttle(() => saveState(store.getState()), 1000))