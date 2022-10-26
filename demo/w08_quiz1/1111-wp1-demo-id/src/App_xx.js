import React, { useState, useEffect } from 'react';
import data from './components/BlogData_xx';
import BlogList_xx from './components/BlogList_xx';
// import Alert_xx from './components/Alert_xx';

const App_39 = () => {
  const [blogs, setBlogs] =  useState(data);
  console.log('blogs',blogs);

  const removeItem = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  }

  const clearBlogs = () => {
    setBlogs([]);
  }

  const filterItem = (category) => {
    if(category === 'all') {
      setBlogs(data);
    } else {
      const newBlogs = data.filter((blog) =>blog.category === category);
      setBlogs(newBlogs);
    }
  }

  return (
    <>
    <section className="blogs">
      <div className="section-title">
        <h2>CSS Grid using breakpoints</h2>
      </div>
      <div className="filter-container">
        <button type="button" className="filter-btn" onClick={()=>filterItem('all')}>all</button>
        <button type="button" className="filter-btn" onClick={()=>filterItem('lifestyle')}>lifestyle</button>
        <button type="button" className="filter-btn" onClick={()=>filterItem('travel')}>travel</button>
      </div>   
      <div className="blogs-center">
        <BlogList_xx key={1} blogs={blogs} removeItem={removeItem}/>
        </div>
        <button className='clear-btn' onClick={clearBlogs}>
        clear all blogs
      </button>
    </section>
    </>
  );
};

export default App_39;
