import React from 'react';
import NumberInput from './numberinput';

export default React.createClass({
  getInitialState: function() {
    return { result: '' };
  },

  calculate: function() {
  	let result = parseFloat(this.refs.numberA.getValue()) * parseFloat(this.refs.numberB.getValue());
    this.setState({ result });
  },
  
  render: function() {
  	return (
  		<div>
  		  <h1>Redington Calculator</h1>
  		  <NumberInput placeholder="value for A" ref="numberA" />
  		  <NumberInput placeholder="value for B" ref="numberB" />
  		  <input type="submit" value="Post" onClick={this.calculate} />
  		  <h3>Result</h3>
  		  <h3>{this.state.result}</h3>
  		</div>
  	);
  }
});