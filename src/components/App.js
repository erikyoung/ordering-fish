/* Core */
import React, { Component } from 'react';
import Headline from './Headline'; 
import Order from './Order'; 
import Inventory from './Inventory'; 
import sampleFishes from '../sample-fishes'; 
import Fish from './Fish'; 


export default class App extends Component {
state = {
  fishes: {}, 
  order: {}
};

addFish = fish => {
 const fishes= {...this.state.fishes}; 
 fishes[`fish${Date.now()}`] = fish; 
   this.setState({
    fishes: fishes
   }); 


  

}; 

 loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
   } 


  render() {
    return (
      <div className="catch-of-the-day">
      	<div className="menu">
      		<Headline tagline="Erik is Cool" />
          <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} /> )}
          </ul>
      	</div>
      	<Order /> 
      	<Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
}
