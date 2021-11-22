// import { applyMiddleware, combineReducers } from "redux";
import { addContact, getContact,deleteContact } from "./operations";
import { getDefaultMiddleware , configureStore, createReducer } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { composeWithDevTools } from 'redux-devtools-extension';
import {
  // addContactsError,
  // addContactsRequest,
  // addContactsSuccess,
  contactsFilter,
  // deleteContact,
  // deleteContactsSuccess,
  // getContactsSuccess,
} from "./actions";
// const persistConfig = {
//     key: 'contacts',
//     storage,
// }
// const contactsList = (state = [...savedArr], { type, payload }) => {
//     switch (type) {
//         case 'addContact': return  [...state, payload]
                
//         case 'deleteContact': return state.filter(contact => contact.id !== payload)
//         default: return state;
            
//     };
// }
// const contactsFilter = (state = '', { type, payload }) => {
//     switch (type) {
//         case 'contactsFilter': return  payload;

//         default: return state;
//      }
// }
// const contactsReducer = combineReducers({
//     contacts: contactsList,
//     filter: contactsFilter,
// });
// const store = createStore(contactsReducer, composeWithDevTools(
//     applyMiddleware()));
const contactsList = createReducer([], {
   [getContact.fulfilled] : (state,{payload}) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state,payload],
  [deleteContact.fulfilled]: (state, { payload }) => state.filter(contact => contact.id !== payload)
});
const filter = createReducer('', {
    [contactsFilter]: (_, { payload }) => payload,
})
const loader = createReducer(false, {
  [getContact.pending]: () => true,
  [getContact.fulfilled]: () => false,
  [getContact.rejected]: () => false,
  
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
})
// const persistedReducer = persistReducer(persistConfig, combineReducers({
//     contacts: contactsList,
// }))
// const myMiddleware = store => next => action => {

//   console.log('прослойка')
//   next(action);
// }
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      },
    },
  ),
]
const store = configureStore({
    reducer: {
    contacts: contactsList,
    filter: filter,
    loader: loader,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})
// const persistor = persistStore(store);
export default store;