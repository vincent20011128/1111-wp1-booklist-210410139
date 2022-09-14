import React from 'react';
import Book_39 from './Book_39';
import {data} from './data';

const Booklist_39 = () => {
  return (
      <section className='booklist'>
      {data.map((book, index) => {
        const { id, img, title, author } = book;
        return <Book_39 key={id} img={img} title={title} author={author}/>
      })}
    </section>
  )
}

export default Booklist_39;
