import React from 'react';

const ProductCard = (props) => {
  const { productName, price, description } = props;

  return (
    <div>
      
      <h2>{productName}</h2>
      <p>Price: ${price}</p>
      <p>Description: {description}</p>
    </div>
  );
};

ProductCard.defaultProps = {
  price: 0,
  description: 'No description available',
};

export default ProductCard;