import React from 'react';
import ReactDOM from 'react-dom';
import PhoneBook from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { PersistGate } from 'redux-persist/es/integration/react';
ReactDOM.render(
    <Provider store={store}>
    {/* <PersistGate loading={null} persistor={store.persistor}> */}
        <PhoneBook/> 
    {/* </PersistGate> */}
    </Provider > ,
   document.querySelector('#root'))


