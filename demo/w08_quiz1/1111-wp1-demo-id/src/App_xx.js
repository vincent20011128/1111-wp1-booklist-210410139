import React, { useState, useEffect } from 'react';
import data from './components/BlogData_xx';

const App_39 = () => {
  const [blogs, setBlogs] =  useState(data);
  console.log('blogs',blogs);
  return (
    <>
    <section className="blogs">
      <div className="section-title">
        <h2>CSS Grid using breakpoints</h2>
      </div>
      <div className="filter-container">
        <button type="button" className="filter-btn">all</button>
        <button type="button" className="filter-btn">lifestyle</button>
        <button type="button" className="filter-btn">travel</button>
      </div>
      <div className="blogs-center">
        {blogs.map((blog) => {
          const {id, img, title, desc, category} = blog;
          return (
            <article className="blog">
          <img
            src={img}
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>{category}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="item-control">
              <a href="#">read more</a>
              <div className='btn-container'>
                <button type='button' className='delete-btn'> delete </button>
              </div>
            </div>
          </div>
        </article>
          )
        })}
        </div>
    </section>
    </>
  );
};

export default App_39;
