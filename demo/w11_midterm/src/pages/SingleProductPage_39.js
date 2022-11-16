import { Link, useParams } from 'react-router-dom';

import midterm_data from '../midterm_data_39'

const SingleProduct_39 = () => {
  const { productId } = useParams();
  console.log('productId', productId);
  console.log('midterm_data', midterm_data);

  const midterm_data = midterm_data.find( (item) => item.id === productId );
  console.log('product', product);
  const {image, name} = product;
  return (
    <section className='section product'>
      <img src={image} alt="" />
      <h5>{name}</h5>
      <Link to="/midterm_data">back to products</Link>
    </section>
  );
};

export default SingleProduct_39;
