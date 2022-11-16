import { useState } from 'react';
import Product_39 from '../components/Product_39';
import midterm_data_39 from '../midterm_data_39';

const P4Page_39 = () => {
  const [products, setProducts] = useState(midterm_data_39);
  console.log('products', products);
  
  const filterItems = (category) => {
    if(category === 'all') {
      setProducts(midterm_data_39);
    } else {
      const newProducts = midterm_data_39.filter((product) =>product.category === category);
      setProducts(newProducts);
    }
  }
  return (
    <>
    <section className="main-section">
      <div className="filter-left">
      <div className="left-content">
        <form className="input-form">
          <input type="text" className="search-input" placeholder="search..." />
        </form>
        <h4>Company</h4>
        <article className="companies">
          <button className="company-btn" onClick={ () => filterItems('all')}>all</button>
          <button className="company-btn" onClick={ () => filterItems('ikea')}>ikea</button>
          <button className="company-btn" onClick={ () => filterItems('marcos')}>marcos</button>
          <button className="company-btn" onClick={ () => filterItems('caressa')}>caressa</button>
        </article>
      </div>
    </div>
    <div className="products-right">
      <div className="products-container">
      
        { products.map((product)=> {
          const{ id,img, name, price } = product;
          return (
            <Product_39 key={id} img={img} name={name} price={price}></Product_39>
          )
        }) }
      </div>
    </div>
  </section>
    </>
  );
};
export default P4Page_39;
