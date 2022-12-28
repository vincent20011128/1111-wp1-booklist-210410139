import React from 'react';
import Blog_39 from './Blog_39';
import { useGlobalContext_39 } from '../Context_39';

const BlogList_39 = () => {
  const mainData = useGlobalContext_39();
  return (
    <div className='blogs-center'>
      {mainData.blogs.map((blog) => {
        const { id, img, title, desc, category } = blog;
        return (
          <Blog_39
            key={id}
            id={id}
            img={img}
            title={title}
            desc={desc}
            category={category}
          />
        );
      })}
    </div>
  );
};

export default BlogList_39;
