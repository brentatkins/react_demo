import React from 'react';
import NumberInput from './numberinput';
import CalculatorStore from './stores/calculatorstore';
import CalculatorActions from './actions/calculatoractions';

export default React.createClass({
  getInitialState: function() {
    return CalculatorStore.getState();
  },

  componentDidMount() {
    CalculatorStore.listen(this.onChange);
  },

  componentWillUnmount() {
  	CalculatorStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  calculate: function() {
  	let A = parseFloat(this.refs.numberA.getValue());
  	let B = parseFloat(this.refs.numberB.getValue());

    CalculatorActions.calculate({A, B});
  },
  
  render: function() {
  	return (
  		<div>
  		  <h1>Redington Calculator</h1>
  		  <NumberInput placeholder="value for A" ref="numberA" />
  		  <NumberInput placeholder="value for B" ref="numberB" />
  		  <input type="button" value="Post" onClick={this.calculate} />
  		  <h3>Result</h3>
  		  <h3>{this.state.result}</h3>
  		</div>
  	);
  }
});