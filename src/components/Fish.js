
import React, { Component } from 'react';
import { formatPrice } from '../helpers'; 



export default class Fish extends Component {
  render() {
  	const image = this.props.details.image;
  	const name = this.props.details.name;
  	const price = this.props.details.price;
  	const desc = this.props.details.desc; 
    return (
      <li className="menu-fish">
     		<img src={image} alt="fuck" />
     		<h3 className="fish-name">
     		{name}
     			<span className="price">{formatPrice(price)}</span>
     		</h3>
      </li>
    );
  }
}
