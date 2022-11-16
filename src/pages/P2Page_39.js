import { useState } from 'react';
import midterm_data_39 from '../midterm_data_39';

const P2Page_39 = () => {
  const [products, setProducts] = useState(midterm_data_39);
  console.log('products', products);
  return (
    <>
      <h2>P2Page_39</h2>
    </>
  );
};
export default P2Page_39;
