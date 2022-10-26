import React, { useState, useEffect } from 'react';

const App_xx = () => {
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
        <article className="blog">
          <img
            src="./images/photo-1.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>lifestyle</span>
            <h3>why coffee is awesome</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className="item-control">
              <a href="#">read more</a>
              <div className='btn-container'>
                <button type='button' className='delete-btn'> delete </button>
              </div>
            </div>
          </div>
        </article>
        <article className="blog">
          <img
            src="/images/photo-3.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>lifestyle</span>
            <h3>why coffee is awesome</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className="item-control">
              <a href="#">read more</a>
              <div className='btn-container'>
                <button type='button' className='delete-btn'> delete </button>
              </div>
            </div>
          </div>
        </article>
        <article className="blog">
          <img
            src="./images/photo-5.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>lifestyle</span>
            <h3>why coffee is awesome</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className="item-control">
              <a href="#">read more</a>
              <div className='btn-container'>
                <button type='button' className='delete-btn'> delete </button>
              </div>
            </div>
          </div>
        </article>
        <article className="blog">
          <img
            src="./images/photo-7.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>travel</span>
            <h3>Travel to Paris</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className="item-control">
              <a href="#">read more</a>
              <div className='btn-container'>
                <button type='button' className='delete-btn'> delete </button>
              </div>
            </div>
          </div>
        </article>
        </div>
    </section>
    </>
  );
};

export default App_xx;
