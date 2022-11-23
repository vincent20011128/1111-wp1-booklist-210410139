import { useEffect, useState } from 'react';
import Product_39 from '../components/Product_39';
import midterm_data_39 from '../midterm_data_39';
import Alert_39 from '../components/Alert_39';

const P6Page_39 = () => {
  const [searchName, setSearchName] = useState('');
  const [products, setProducts] = useState(midterm_data_39);

  console.log('products', products);

  const [alert,setAlert] = useState({
    show:false,
    msg:'',
    type: '',
  });

  useEffect(()=>{
    const filterProducts = midterm_data_39.filter((product)=>
    product.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setProducts(filterProducts);
  },[searchName]);

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({show, msg, type });
  };

  const filterItems = (category) => {
    if(category === 'all') {
      setProducts(midterm_data_39);
    } else {
      const newProducts = midterm_data_39.filter((product) =>product.category === category);
      setProducts(newProducts);
    }
  }
  const clearAllProducts = () => {
    showAlert(true,'all products deleted','danger');
    setProducts([]);
  };

  const fetchAllProducts = () => {
    // showAlert(true,'empty list','danger');
    setProducts(midterm_data_39);
  };

  return (
    <>
    <section className="main-section">
      <div className="filter-left">
      <div className="left-content">
        <form className="input-form">
          <input 
          type="text"
          value={searchName}
          onChange={ (e) => {
            setSearchName(e.target.value)
          }}
          className="search-input"
          placeholder="search..." />
        </form>
        <h4>Company</h4>
        <article className="companies">
          <button className="company-btn" onClick={ () => filterItems('all')}>all</button>
          <button className="company-btn" onClick={ () => filterItems('ikea')}>ikea</button>
          <button className="company-btn" onClick={ () => filterItems('marcos')}>marcos</button>
          <button className="company-btn" onClick={ () => filterItems('caressa')}>caressa</button>
        </article>
        <button className="clear-btn" onClick={clearAllProducts}>Clear All</button>
    <button className="fetch-btn" onClick={fetchAllProducts}>Fetch All</button>
      </div>
    </div>
    { alert.show && <Alert_39  {...alert} removeAlert={showAlert}/>}
    <div className="products-right">
      <div className="products-container">
      
        { products.map((product)=> {
          const{ id,img, name, price } = product;
          return (
            <Product_39 key={id} img={img} name={name} price={price} />
          )
        }) }
      </div>
    </div>
  </section>
    </>
  );
};
export default P6Page_39;
