import React, { useState, useEffect, useContext } from 'react';
import data from '../blogData_39';
import BlogList_39 from '../components/BlogList_39';
import Alert_39 from '../components/Alert_39';
import { useGlobalContext_39 } from '../Context_39';

const BlogContext = React.createContext();

const Blogs_39 = () => {
  const { blogs, alert, removeItem, showAlert, clearBlogs, filterItems } =
    useGlobalContext_39();
  return (
    <section className='blogs'>
      {alert.show && <Alert_39 {...alert} removeAlert={showAlert} />}
      <div className='section-title'>
        <h2>CSS Grid using breakpoints</h2>
      </div>
      <div className='filter-container'>
        <button
          type='button'
          className='filter-btn'
          onClick={() => filterItems('all')}
        >
          all
        </button>
        <button
          type='button'
          className='filter-btn'
          onClick={() => filterItems('lifestyle')}
        >
          lifestyle
        </button>
        <button
          type='button'
          className='filter-btn'
          onClick={() => filterItems('travel')}
        >
          travel
        </button>
      </div>
      <div className='blogs-center'>
        <BlogList_39 key={1} />
      </div>
      <button className='clear-btn' onClick={clearBlogs}>
        clear all blogs
      </button>
    </section>
  );
};

export default Blogs_39;
