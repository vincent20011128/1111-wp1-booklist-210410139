import React, { useState, useEffect,useContext } from 'react';
import data from './components/BlogData_xx';
import Alert_39 from './components/Alert_39';
import BlogList_xx from "./components/BlogList_xx"

const BlogContext = React.createContext();

const App_xx = () => {
  const [blogs, setBlogs] =  useState(data);
  console.log('blogs',blogs);
  const [alert,setAlert] = useState({
    show: false,
    msg:'',
    type: ''
  });

  const removeItem = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
    showAlert(true,'item removed','danger');
  }

  const clearBlogs = () => {
    setBlogs([]);
    showAlert(true,'empty list','danger');
  }

  const filterItems = (category) => {
    if(category === 'all') {
      setBlogs(data);
    } else {
      const newBlogs = data.filter((blog) =>blog.category === category);
      setBlogs(newBlogs);
    }
  }
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({show, msg, type });
  };
  

  return (
    <BlogContext.Provider value={{blogs,alert,removeItem,clearBlogs,filterItems,showAlert}}>
    <section className="blogs">
    {alert.show&& <Alert_39 {...alert} removeAlert={showAlert}/> }
      <div className="section-title">
        <h2>CSS Grid using breakpoints</h2>
      </div>
      <div className="filter-container">
        <button type="button" className="filter-btn" onClick={()=>filterItems('all')}>all</button>
        <button type="button" className="filter-btn" onClick={()=>filterItems('lifestyle')}>lifestyle</button>
        <button type="button" className="filter-btn" onClick={()=>filterItems('travel')}>travel</button>
      </div>   
      <div className="blogs-center">
        <BlogList_xx key={1}/>
        </div>
        <button className='clear-btn' onClick={clearBlogs}>
        clear all blogs
      </button>
    </section>
    </BlogContext.Provider>
  );
};


const useBlogContext = () => {
  return useContext(BlogContext)
}

export {App_xx, useBlogContext} ;
