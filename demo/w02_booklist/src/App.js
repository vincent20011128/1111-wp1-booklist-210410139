import './App.css';

const App = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />      
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <img src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51mDSB+k7YL._SY344_BO1,204,203,200_.jpg" alt="" />
      <h1>Fairy Tale</h1>
      <h4>Hardcover</h4>
    </article>
  )
}

export default App;
