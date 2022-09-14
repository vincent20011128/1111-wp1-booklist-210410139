import './App_39.css';

const firstBook = {
  img:'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51mDSB+k7YL._SY344_BO1,204,203,200_.jpg',
  title:'Fairy Tale',
  author:'Hardcover'
}

const secondBook = {
  img:'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/41d1gVUK1yL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  title:'Verity',
  author:'Colleen Hoover'
}

const thirdBook = {
  img:'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/41D7oMcX9cL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  title:'I am Glad My Mom Died',
  author:'Jennette McCurdy'
}

const App_39 = () => {
  return (
    <section className='booklist'>
      <Book_39 img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book_39 img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
      <Book_39 img={thirdBook.img} title={thirdBook.title} author={thirdBook.author}/>
    </section>
  );
}

const Book_39 = ({ img, title, author }) => {
// console.log('props',props);
// const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

export default App_39;
