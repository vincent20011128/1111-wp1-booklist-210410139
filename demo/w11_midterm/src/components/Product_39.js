const Product_39 = ({ img, name, price }) => {
  return (
    <>
  <div className="single-product">
    <img 
    src={img} 
    className="single-product-img img" 
    alt="albany table" />
    <footer>
      <h5 className="name">{name}</h5>
      <span className="price">{price}</span>
      </footer>
      </div>
      </>
  );
};
export default Product_39;
