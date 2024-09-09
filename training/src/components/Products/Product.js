const Product = ({ imgUrl, title, productPrice }) => (
  <div class="product-container">
    <img src={imgUrl} alt="Tacos With Lime" width="640" />
    <h2>{title}</h2>
    <p>Price: {productPrice}$</p>
    <button type="button">Add to cart</button>
  </div>
);

export default Product;
