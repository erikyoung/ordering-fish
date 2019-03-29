
import React, { Component } from 'react';
import { formatPrice } from '../helpers'; 



export default class Fish extends Component {
  render() {
  	const image = this.props.details.image;
  	const name = this.props.details.name;
  	const price = this.props.details.price;
  	const desc = this.props.details.desc; 
  	const status = this.props.details.status; 
  	const isAvailable = status === 'available'; 
    return (
      <li className="menu-fish">
     		<img src={image} alt="sample photo" />
     		<h3 className="fish-name">
     		{name}
     			<span className="price">{formatPrice(price)}</span>
     		</h3>
     		<p>{desc}</p>
     		<button disabled={!isAvailable}>{isAvailable ? 'Add to Order' : 'Sold Out'}Add To Cart</button>
      </li>
    );
  }
}
