import React from "react";
import "./checkoutItem.styles.scss";
import { connect } from "react-redux";
import {
  removeItem,
  addItem,
  decrementQuantity,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, removeItem , addItem, decrementQuantity}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decrementQuantity(cartItem)}> &#10094;</div>
        {quantity}
        <div className="arrow" onClick={() => addItem(cartItem)}> &#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispathToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  decrementQuantity: (item) => dispatch(decrementQuantity(item)),
  addItem : (item) => dispatch(addItem(item)),

});

export default connect(null, mapDispathToProps)(CheckoutItem);
