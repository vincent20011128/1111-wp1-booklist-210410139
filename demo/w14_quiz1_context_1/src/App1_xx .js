import React, { useState, useEffect,useContext } from 'react';
import data from './components/BlogData_xx';
import Alert_39 from './components/Alert_39';

const BlogContext = React.createContext();

const App1_xx = () => {
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

const BlogList_xx = () => {
  const {blogs} = useContext(BlogContext);
  return (
    <div className="blogs-center">
    {blogs.map((blog) => {
      const {id, img, title, desc, category} = blog;
      return (
        <Blog_xx key={id} id={id} img={img} title={title} desc={desc} category={category} />
      )
    })}
    </div>
  )
}

const Blog_xx = ({id, img, title, desc, category}) => {
  const {removeItem} = useContext(BlogContext);
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
          <button type='button' className='delete-btn' onClick={() => removeItem(id)}> delete </button>
        </div>
      </div>
    </div>
  </article>
  )
};

export default App1_xx;
