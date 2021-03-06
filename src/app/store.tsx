import { configureStore } from '@reduxjs/toolkit';
import UserRedux from './userRedux';
import UserAdminRedux from './userReduxAdmin';
import cartReducer from './cartRedux';
import checkOutRedux from '../component/checkOut/checkOutRedux';
const rootReducer: any = {
  user: UserRedux,
  userAdmin: UserAdminRedux,
  cart: cartReducer,
  checkout: checkOutRedux,
};
const store: any = configureStore({
  reducer: rootReducer,
});
export default store;
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import userReducer from './userRedux';
// import cartReducer from './cartRedux';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// };

// const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export let persistor = persistStore(store);
