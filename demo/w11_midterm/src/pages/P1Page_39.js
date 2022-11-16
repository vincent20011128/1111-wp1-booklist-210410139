import React from 'react';
import Product_39 from '../components/Product_39'
import { midterm_data_39 } from '../midterm_data_39';

const P1Page_39 = () => {
  return (
    <section className='p1Page'>
      {midterm_data_39.map((book, index) => {
        const { id, img, title, author } = book;
        return <Product_39 key={id} img={img} title={title} author={author} />;
      })}
    </section>
  );
};
export default P1Page_39;

