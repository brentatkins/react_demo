import alt from '../alt';

class CalculatorActions {
	constructor() {
		this.generateActions('calculate');
	}
}

export default alt.createActions(CalculatorActions);