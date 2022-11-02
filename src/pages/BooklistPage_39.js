import React from 'react';
import Book_39 from '../components/w02-booklist/Book_39';
import {booklist_data} from '../booklist_data';

const BooklistPage_39 = () => {
  return (
      <section className='booklist'>
      {booklist_data.map((book, index) => {
        const { id, img, title, author } = book;
        return <Book_39 key={id} img={img} title={title} author={author}/>
      })}
    </section>
  )
}

export default BooklistPage_39;
