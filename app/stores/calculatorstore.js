import alt from '../alt';
import CalculatorActions from '../actions/calculatoractions';

class CalculatorStore {
	constructor() {
		this.bindListeners({
			calculate: CalculatorActions.CALCULATE
		});

		this.state = {
			result: 'store load'
		};
	}

	calculate(payload) {
		let result = payload.A * payload.B;
		this.setState({ result });
	}
}

export default alt.createStore(CalculatorStore);