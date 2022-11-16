import { useState } from 'react';
import Product_39 from '../components/Product_39';
import midterm_data_39 from '../midterm_data_39';

const P3Page_39 = () => {
  const [products, setProducts] = useState(midterm_data_39);
  console.log('products', products);
  return (
    <>
      <h2>P3Page_39</h2>
    </>
  );
};
export default P3Page_39;
