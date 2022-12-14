import React, { useState, useContext, useReducer, useEffect } from 'react';
import Reducer_xx from './Reducer_xx';

import cartItems from './data'
import { children } from 'react';

const AppContext_xx = React.createContext();

const initialState = {
  loading: false,
  cart:cartItems,
  amount:4,
  total:999.9
}

const AppProvider_xx = ({children}) => {
  const [state,dispatch] = useReducer(Reducer_xx,initialState);

  useEffect(()=>{
    dispatch({type:'GET_TOTALS'});
  },[state.cart]);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART'});
  }

  const increase = (id) => {
    dispatch({type: 'INCREASE', payload:id});
  }
  return <AppContext_xx.Provider value = {{...state, clearCart,increase}}>
    {children}
  </AppContext_xx.Provider>

  const decrease = (id) => {
    dispatch({type: 'DECREASE',payload:id});
  }
};

const useGlobalContext_xx = () => {
  return useContext(AppContext_xx);
}

export { AppProvider_xx , useGlobalContext_xx};
