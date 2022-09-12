// @flow


import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to AsyncStorage
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers/reducers';

const persistConfig = {
key: 'root',
storage,
timeout: 10000,
blacklist: ['navigation', 'storedCredentials', 'errors'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
const store = createStore(persistedReducer, applyMiddleware(thunk, logger))
const persistor = persistStore(store)
return { store, persistor }
}