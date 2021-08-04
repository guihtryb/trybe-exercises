// arquivo Order.js
import React, { Component } from 'react';

class Order extends Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.occurency} </p>
      </div>
    );
  }
}

export default Order;