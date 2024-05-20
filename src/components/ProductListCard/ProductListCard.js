import React from 'react';
import './ProductListCard.css';

const ProductListCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <div className="product-id">{product.id}</div>
        <div className="product-title">{product.title}</div>
        <div className="product-description">{product.description}</div>
        <div className="product-shipping">
          <span className="shipping-icon">🚚</span> Shipped in 3 business days from {product.shippingLocation}, if ordering a maximum of {product.maxOrder} pcs
        </div>
      </div>
      <div className="product-actions">
        <div className="wishlist">
          <span className="wishlist-icon">⭐</span> ADD TO WISHLIST
          <div className="compare">
            <input type="checkbox" /> Compare product
          </div>
        </div>
        <div className="pricing">
          <div className="price">LIST PRICE <span className="price-amount">${product.price}</span></div>
          <div className="stock-status">
            <span className="stock-icon">🟢</span> {product.stock} in stock
          </div>
          <div className="cart-actions">
            <input type="number" defaultValue="1" min="1" className="quantity" />
            <button className="add-to-cart">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ProductListCard;
