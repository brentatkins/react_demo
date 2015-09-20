import React from 'react';

export default React.createClass({

	getInitialState: function() {
      return { value: '' };
	},

	handleChange: function(e){
	  this.setState({ value: e.target.value });
	},

	getValue: function(){
		return this.state.value;
	},

	render: function() {
		return (
			<input type="text" placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange} />
		);
	}
})