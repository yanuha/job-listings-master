import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: [],
  // blacklist: ['filters', 'positions'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
export const persistor = persistStore(store);
