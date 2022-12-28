import React, { useState, useContext, useReducer, useEffect } from 'react';
import data from './blogData_39';
import midterm_data_39 from './midterm_data_39';

import Alert_39 from './components/Alert_39';

import Reducer_39 from './Reducer_39';

const AppContext_39 = React.createContext();

const initialState = {
  products2: midterm_data_39,
};

const AppProvider_39 = ({ children }) => {
  const [blogs, setBlogs] = useState(data);

  const [products, setProducts] = useState(midterm_data_39);
  console.log('products', products);

  const [state, dispatch] = useReducer(Reducer_39
  , initialState);
  console.log('products2', state.products2);

  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  console.log('blogs', blogs);

  // Blogs

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const clearBlogs = () => {
    showAlert(true, 'empty all blogs', 'danger');
    setBlogs([]);
  };

  const filterItems = (category) => {
    if (category === 'all') {
      setBlogs(data);
    } else {
      const newBlogs = data.filter((blog) => blog.category === category);
      setBlogs(newBlogs);
    }
  };

  return (
    <AppContext_39.Provider
      value={{
        blogs,
        alert,
        removeItem,
        showAlert,
        clearBlogs,
        filterItems,
      }}
    >
      {children}
    </AppContext_39.Provider>
  );
};
// make sure use
export const useGlobalContext_39 = () => {
  return useContext(AppContext_39);
};

export { AppContext_39, AppProvider_39 };
