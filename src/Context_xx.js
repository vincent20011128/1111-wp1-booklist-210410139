import React, { useState, useContext, useReducer, useEffect } from 'react';
import Reducer_xx from './Reducer_xx';

import cartItems from './data'
import { children } from 'react';

const AppContext_xx = React.createContext();

const initialState = {
  loading: false,
  cart:cartItems,
  amount:0,
  total:0
}

const AppProvider_xx = ({children}) => {
  const [state,dispatch] = useReducer(Reducer_xx,initialState);
  return <AppContext_xx.Provider value = {{...state}}>
    {children}
  </AppContext_xx.Provider>
};

const useGlobalContext_xx = () => {
  return useContext(AppContext_xx);
}

export { AppProvider_xx , useGlobalContext_xx};
