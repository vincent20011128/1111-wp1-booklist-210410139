import React from 'react'
import Blog_xx from './Blog_xx'
import { useBlogContext } from '../App_xx';

const BlogList_xx = () => {
  const {blogs} = useBlogContext();
  return (
    <div className="blogs-center">
    {blogs.map((blog) => {
      const {id, img, title, desc, category} = blog;
      return (
        <Blog_xx id={id} img={img} title={title} desc={desc} category={category} />
      )
    })}
    </div>
  )
}

export default BlogList_xx
